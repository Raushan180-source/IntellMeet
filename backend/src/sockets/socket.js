import jwt from 'jsonwebtoken';
import User from '../modules/user/user.model.js';
import logger from '../utils/logger.js';

// roomId -> Set of { socketId, userId, name, initials, avatar }
const rooms = new Map();

const getRoom = (roomId) => {
  if (!rooms.has(roomId)) rooms.set(roomId, new Map());
  return rooms.get(roomId);
};

export const initSocket = (io) => {
  // ── Auth middleware ────────────────────────────────────────────────
  io.use(async (socket, next) => {
    try {
      const token =
        socket.handshake.auth?.token ||
        socket.handshake.headers?.authorization?.split(' ')[1];

      if (!token) return next(new Error('Authentication token missing'));

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select('name avatar initials status');
      if (!user) return next(new Error('User not found'));

      socket.user = user;
      next();
    } catch (err) {
      next(new Error('Authentication failed'));
    }
  });

  io.on('connection', (socket) => {
    logger.info(`Socket connected: ${socket.user.name} (${socket.id})`);

    // ── Join meeting room ────────────────────────────────────────────
    socket.on('room:join', async ({ roomId }) => {
      socket.join(roomId);
      const room = getRoom(roomId);
      room.set(socket.id, {
        socketId: socket.id,
        userId: socket.user._id.toString(),
        name: socket.user.name,
        initials: socket.user.initials,
        avatar: socket.user.avatar,
      });

      // Notify others
      socket.to(roomId).emit('room:user-joined', {
        userId: socket.user._id,
        name: socket.user.name,
        initials: socket.user.initials,
        avatar: socket.user.avatar,
      });

      // Send current participants list to the joining user
      socket.emit('room:participants', Array.from(room.values()));

      // Update DB status
      await User.findByIdAndUpdate(socket.user._id, { status: 'in-meeting' });

      logger.info(`${socket.user.name} joined room ${roomId}`);
    });

    // ── Leave meeting room ───────────────────────────────────────────
    socket.on('room:leave', async ({ roomId }) => {
      handleLeaveRoom(socket, io, roomId);
    });

    // ── Chat messages ────────────────────────────────────────────────
    socket.on('chat:message', ({ roomId, text }) => {
      if (!text?.trim()) return;

      const message = {
        id: Date.now().toString(),
        text: text.trim(),
        sender: {
          _id: socket.user._id,
          name: socket.user.name,
          initials: socket.user.initials,
          avatar: socket.user.avatar,
        },
        timestamp: new Date().toISOString(),
      };

      // Broadcast to everyone in room including sender
      io.to(roomId).emit('chat:message', message);
    });

    // ── Typing indicator ─────────────────────────────────────────────
    socket.on('chat:typing', ({ roomId, isTyping }) => {
      socket.to(roomId).emit('chat:typing', {
        userId: socket.user._id,
        name: socket.user.name,
        isTyping,
      });
    });

    // ── WebRTC signaling ─────────────────────────────────────────────
    socket.on('webrtc:offer', ({ to, offer }) => {
      io.to(to).emit('webrtc:offer', { from: socket.id, offer });
    });

    socket.on('webrtc:answer', ({ to, answer }) => {
      io.to(to).emit('webrtc:answer', { from: socket.id, answer });
    });

    socket.on('webrtc:ice-candidate', ({ to, candidate }) => {
      io.to(to).emit('webrtc:ice-candidate', { from: socket.id, candidate });
    });

    // ── Media state (mic/cam toggle) ─────────────────────────────────
    socket.on('media:toggle', ({ roomId, type, enabled }) => {
      socket.to(roomId).emit('media:toggle', {
        userId: socket.user._id,
        type,   // 'audio' | 'video'
        enabled,
      });
    });

    // ── Live AI transcript chunk ─────────────────────────────────────
    socket.on('ai:transcript-chunk', ({ roomId, text }) => {
      socket.to(roomId).emit('ai:transcript-chunk', {
        userId: socket.user._id,
        name: socket.user.name,
        text,
        timestamp: new Date().toISOString(),
      });
    });

    // ── Presence (online status) ─────────────────────────────────────
    socket.on('presence:update', async ({ status }) => {
      const valid = ['online', 'busy', 'offline'];
      if (!valid.includes(status)) return;
      await User.findByIdAndUpdate(socket.user._id, { status });
      socket.broadcast.emit('presence:update', { userId: socket.user._id, status });
    });

    // ── Disconnect ───────────────────────────────────────────────────
    socket.on('disconnecting', () => {
      socket.rooms.forEach((roomId) => {
        if (roomId !== socket.id) handleLeaveRoom(socket, io, roomId);
      });
    });

    socket.on('disconnect', async () => {
      await User.findByIdAndUpdate(socket.user._id, { status: 'offline', lastSeen: new Date() });
      logger.info(`Socket disconnected: ${socket.user.name}`);
    });
  });
};

function handleLeaveRoom(socket, io, roomId) {
  const room = getRoom(roomId);
  room.delete(socket.id);
  socket.leave(roomId);

  socket.to(roomId).emit('room:user-left', {
    userId: socket.user._id,
    name: socket.user.name,
  });

  // Clean up empty rooms
  if (room.size === 0) rooms.delete(roomId);
}