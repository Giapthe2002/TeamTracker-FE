# Task Manager

A full-stack web app to **create, assign, and track team tasks** with role-based access (**Admin / Member**) and rich progress dashboards (charts, stats, deadlines).

> Built for learning and demo purposes. Clean code, modular UI, and practical features that mirror real-world workflows.

---

## ✨ Features

### Admin
- ✅ Task CRUD (create/read/update/delete)
- ✅ Assign tasks to one or multiple members
- ✅ Set priority, due date, checklists, attachments (optional)
- ✅ Progress & status dashboards (charts: by status/priority, overdue, throughput)
- ✅ Team overview: workload per member, late tasks, completion rate
- ✅ Role & access control (Admin > Member)

### Member
- ✅ See assigned tasks (priority, deadline, progress)
- ✅ Update status (e.g., `pending` → `in_progress` → `completed`)
- ✅ Edit checklist / mark todo items complete
- ✅ Personal stats: finished vs. pending, upcoming deadlines

### UX
- Responsive UI (desktop/mobile)
- Keyboard-friendly forms & accessible components
- Toasts & validation feedback
- Line-clamp for long texts, smart truncation

---

## 🧱 Architecture

- **Frontend**: React, TypeScript, Tailwind CSS (or SCSS), Vite  
- **State**: React Context + Hooks  
- **Backend**: Node.js, Express.js (RESTful APIs)  
- **Auth**: JWT (access token)  
- **DB**: MongoDB (Mongoose)  
- **Charts**: any React charting lib (Recharts)  
- **Build/Dev**: ESLint + Prettier, dotenv, concurrently

## ⚙️ Installation
1. Clone the repository
   ```bash
   git clone https://github.com/Giapthe2002/TeamTracker-FE
2. Install dependencies for frontend <br>
   npm install
3. Setup environment variables (.env.example -> .env) <br>
   MONGO_URI=your_mongodb_connection_string <br>
   JWT_SECRET=your_secret_key <br>
   PORT=5000
4. Run the development servers <br>
   cd TeamTracker-FE <br>
   npm run dev

## 📸 Demo


