# VideoHub — Full-Stack Video Streaming Platform

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Site-brightgreen)](https://videohubapplication.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/SahalTariq/VideoHub-Full-Stack-Video-Streaming)

VideoHub is a MERN-based video streaming platform inspired by modern video-sharing applications. Users can create accounts, upload and watch videos, interact with content, and organize videos into playlists.

This project demonstrates practical full-stack development using React, Redux Toolkit, Node.js, Express, MongoDB, JWT authentication, Cloudinary, and Multer.

## ✨ Features Completed

- User registration and login
- JWT authentication with access and refresh tokens
- Password hashing with bcryptjs
- HTTP-only authentication cookies
- Responsive video feed
- Video and thumbnail upload with Cloudinary
- Video watch page with view tracking
- Like and unlike videos
- Add, edit, and delete comments
- Create and manage playlists
- Add and remove videos from playlists
- Liked videos page
- User profile with avatar and cover image support
- Protected routes for authenticated users
- Centralized API error handling

## 🚧 Features In Progress

The following features are currently under development and are not fully completed yet:

- Trending videos
- Channel subscriptions
- Creator dashboard and analytics
- Watch history UI and complete workflow
- Tweets/posts and social feed
- Additional video management and creator tools

## 🚀 Live Demo

👉 **[Try VideoHub Live](https://videohubapplication.netlify.app)**

> ⚠️ **Note:** The backend is hosted on Render's free tier, which spins down after inactivity. The **first request may take ~30–50 seconds** to wake up. Please be patient on the initial load — subsequent requests will be fast.

## 🛠️ Tech Stack

**Frontend:** React, Vite, React Router, Redux Toolkit, Tailwind CSS, React Hot Toast

**Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, Multer, Cloudinary

**Deployment:** Netlify (frontend) · Render (backend) · MongoDB Atlas (database) · Cloudinary (media storage)

## 📁 Project Structure

```text
VideoHub-Full-Stack-Video-Streaming/
├── src/                    # Express backend
│   ├── controllers/        # Business logic
│   ├── db/                 # Database connection
│   ├── middlewares/        # Authentication, uploads, and errors
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   └── utils/              # Helpers and Cloudinary configuration
├── frontEnd/videohub/      # React frontend
│   └── src/
│       ├── app/            # API utilities and Redux store
│       ├── features/       # Redux slices
│       ├── pages/          # Application pages
│       ├── componnents/    # Reusable components
│       └── layout/         # Sidebar, top bar, and layout
└── public/temp/            # Temporary upload files

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js 18+
- MongoDB or MongoDB Atlas
- Cloudinary account
- npm

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/SahalTariq/VideoHub-Full-Stack-Video-Streaming.git
cd VideoHub-Full-Stack-Video-Streaming
```

### 2️⃣ Install Dependencies

Install backend dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontEnd/videohub
npm install
cd ../..
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=8000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017
CORS_ORIGIN=http://localhost:5173
```

Create `frontEnd/videohub/.env`:

```env
VITE_API_URL=http://localhost:8000/api/v1
```

#### 🌐 Production Environment Variables

On Netlify:

```env
VITE_API_URL=https://your-render-backend.onrender.com/api/v1
```

On Render:

```env
CORS_ORIGIN=https://videohubapplication.netlify.app
NODE_ENV=production
```

### 4️⃣ Run the Project

Start the backend:

```bash
npm run dev
```

Start the frontend:

```bash
cd frontEnd/videohub
npm run dev
```

Open the frontend at http://localhost:5173.

---

## 📜 Available Scripts

### Backend

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start backend with Nodemon |
| `npm start` | Start backend with Node.js |

### Frontend

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start Vite development server |
| `npm run build` | Create production build |
| `npm run lint` | Run ESLint |

## 🔌 API Modules

The backend API is organized under `/api/v1`:

- `/users` — registration, login, profile, password, and authentication
- `/videos` — upload, publish, update, view, and fetch videos
- `/comments` — create, update, delete, and fetch comments
- `/likes` — like videos, comments, and posts
- `/playlists` — create and manage playlists
- `/subscriptions` — channel subscription functionality _(in progress)_
- `/dashboard` — creator analytics functionality _(in progress)_
- `/tweets` — posts/tweets functionality _(in progress)_

## 🔐 Authentication Flow

1. Users register with account and profile information.
2. Passwords are hashed with bcryptjs before database storage.
3. Login generates access and refresh JWT tokens.
4. Tokens are stored in HTTP-only cookies.
5. Protected routes verify the access token through authentication middleware.
6. The frontend attempts to refresh the access token when the session expires.

---

## ☁️ Cloudinary Upload Flow

1. The frontend sends video and thumbnail files using multipart form data.
2. Multer temporarily stores the files in `public/temp`.
3. Cloudinary uploads and hosts the media files.
4. The returned Cloudinary URLs are saved in MongoDB.
5. Temporary local files are removed after upload processing.

---

## 🚧 Future Improvements

- Complete trending, subscriptions, dashboard, watch history, and tweets/posts features
- Improve upload validation and file-size handling

## Author

Sahal Tariq

- 🌐 **Live Demo:** [https://your-netlify-link.netlify.app](https://videohubapplication.netlify.app)
- 💻 GitHub: [@SahalTariq](https://github.com/SahalTariq)
- 📦 Repository: [VideoHub-Full-Stack-Video-Streaming](https://github.com/SahalTariq/VideoHub-Full-Stack-Video-Streaming)
