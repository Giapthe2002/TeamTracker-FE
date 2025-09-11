export const BASE_URL = "https://team-tracker-be.vercel.app/";
//http://localhost:8000
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    GET_PROFILE: "/api/auth/profile", // Get logged-in user details
  },

  USERS: {
    GET_ALL_USERS: "/api/users",
    GET_USER_BY_ID: (userId) => `/api/users/${userId}`,
    CREATE_USER: "/api/users", // Admin only
    UPDATE_USER: (userId) => `/api/users/${userId}`,
    DELETE_USER: (userId) => `/api/users/${userId}`,
  },

  TASK: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data",
    GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data",
    GET_ALL_TASK: "/api/tasks",
    GET_TASK_BY_ID: (taskID) => `/api/tasks/${taskID}`,
    CREATE_TASK: "/api/tasks", // Admin only
    UPDATE_TASK: (taskID) => `/api/tasks/${taskID}`,
    DELETE_TASK: (taskID) => `/api/tasks/${taskID}`,

    UPDATE_TASK_STATUS: (taskID) => `/api/tasks/${taskID}/status`,
    UPDATE_TODO_CHECKLIST: (taskID) => `/api/tasks/${taskID}/todo`,
  },

  REPORT: {
    EXPORT_TASKS: "/api/reports/export/tasks", // Download all task as an Excel
    EXPORT_USERS: "/api/reports/export/users", // Download user-task report
  },

  IMAGE: {
    UPLOAD_IMAGE: "api/auth/upload-image",
  },
};
