# IntellMeet 🤝

An AI-powered enterprise meeting and collaboration platform with real-time video, smart summaries, and task management.

## Tech Stack

**Frontend**
- React 19 + TypeScript
- Vite, Tailwind CSS
- Zustand (state management)
- Socket.IO Client, Axios, React Router DOM

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose
- Socket.IO (real-time)
- JWT Auth, bcryptjs, Helmet, Morgan

## Project Structure

```
intellmeet/
├── backend/
│   └── src/
│       ├── config/        # DB connection
│       ├── middleware/    # Auth & error middleware
│       ├── modules/       # ai, auth, chat, meeting, task, user
│       ├── sockets/       # Socket.IO logic
│       └── utils/         # Token generation, logger
└── frontend/
    └── src/
        ├── components/    # Reusable UI components
        ├── features/      # auth, chat, dashboard, meeting
        ├── hooks/         # Custom React hooks
        ├── lib/           # API client
        ├── routes/        # App routing
        ├── store/         # Zustand stores
        └── types/         # TypeScript types
```

## Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB instance (local or Atlas)

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`  
Backend runs at `http://localhost:5000`

## Features

- 🎥 Real-time video meetings
- 🤖 AI-powered meeting summaries
- 💬 In-meeting chat
- ✅ Task management
- 🔐 JWT-based authentication
- 📡 WebSocket support via Socket.IO

## Scripts

| Location | Command | Description |
|----------|---------|-------------|
| backend | `npm run dev` | Start backend with nodemon |
| backend | `npm start` | Start backend (production) |
| frontend | `npm run dev` | Start Vite dev server |
| frontend | `npm run build` | Build for production |
| frontend | `npm run lint` | Run ESLint |

## License

ISC
