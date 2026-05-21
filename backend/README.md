# IntellMeet — Backend

Node.js + Express 5 REST API and Socket.IO server for the IntellMeet platform.

## Tech Stack

- Node.js + Express 5
- MongoDB + Mongoose 9
- Socket.IO 4
- JWT (jsonwebtoken) + bcryptjs
- Helmet, CORS, Morgan, express-rate-limit
- dotenv, cookie-parser

## Project Structure

```
backend/
└── src/
    ├── config/
    │   └── db.js                    # MongoDB connection (Mongoose)
    ├── middleware/
    │   ├── auth.middleware.js        # JWT verification guard
    │   └── error.middleware.js       # Global error & 404 handler
    ├── modules/
    │   ├── ai/
    │   │   ├── ai.controller.js      # AI route handlers
    │   │   ├── ai.routes.js          # POST /api/ai/*
    │   │   └── ai.service.js         # AI summary business logic
    │   ├── auth/
    │   │   ├── auth.controller.js    # Register, login, logout handlers
    │   │   ├── auth.routes.js        # POST /api/auth/*
    │   │   ├── auth.service.js       # Auth business logic
    │   │   └── auth.validation.js    # Input validation rules
    │   ├── chat/
    │   │   ├── chat.controller.js    # Chat message handlers
    │   │   └── chat.routes.js        # GET/POST /api/chat/*
    │   ├── meeting/
    │   │   ├── meeting.controller.js # Meeting CRUD handlers
    │   │   ├── meeting.model.js      # Mongoose Meeting schema
    │   │   └── meeting.routes.js     # /api/meetings/*
    │   ├── task/
    │   │   ├── task.controller.js    # Task CRUD handlers
    │   │   ├── task.routes.js        # /api/tasks/*
    │   │   └── task.service.js       # Task business logic
    │   └── user/
    │       ├── user.controller.js    # User profile handlers
    │       ├── user.model.js         # Mongoose User schema
    │       └── user.routes.js        # /api/users/*
    ├── sockets/
    │   └── socket.js                 # Socket.IO event handlers (chat, meeting)
    ├── utils/
    │   ├── generateToken.js          # JWT sign & set cookie helper
    │   └── logger.js                 # App logger
    ├── app.js                        # Express setup, middleware, route mounting
    └── server.js                     # HTTP server, Socket.IO init, DB connect, graceful shutdown
```

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | No | Register new user |
| POST | `/api/auth/login` | No | Login & receive JWT |
| POST | `/api/auth/logout` | Yes | Logout & clear cookie |
| GET | `/api/users/profile` | Yes | Get current user profile |
| PUT | `/api/users/profile` | Yes | Update user profile |
| GET | `/api/meetings` | Yes | List meetings |
| POST | `/api/meetings` | Yes | Create meeting |
| PUT | `/api/meetings/:id` | Yes | Update meeting |
| DELETE | `/api/meetings/:id` | Yes | Delete meeting |
| GET | `/api/chat/:meetingId` | Yes | Get chat messages |
| POST | `/api/chat/:meetingId` | Yes | Send chat message |
| GET | `/api/tasks` | Yes | List tasks |
| POST | `/api/tasks` | Yes | Create task |
| PUT | `/api/tasks/:id` | Yes | Update task |
| DELETE | `/api/tasks/:id` | Yes | Delete task |
| POST | `/api/ai/summary` | Yes | Generate AI meeting summary |
| GET | `/health` | No | API health check |

## Setup

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
```

```bash
npm run dev
```

Runs at `http://localhost:5000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start with nodemon (hot reload) |
| `npm start` | Start for production |
