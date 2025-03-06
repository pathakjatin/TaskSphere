import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api", // Change this to your backend URL in production
});

// ✅ Add a request interceptor to attach user authentication token
API.interceptors.request.use((config) => {
    const user = JSON.parse(localStorage.getItem("user")); // Fetch user from localStorage
    if (user?.token) { 
        config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default API;
