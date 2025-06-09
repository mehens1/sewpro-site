
import axios, { type AxiosInstance } from 'axios';
const baseURL = import.meta.env.VITE_API_BASE_URL;

const api: AxiosInstance = axios.create({
    baseURL,
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                console.error('Unauthorized, redirecting...');
            } else if (error.response.status === 500) {
                console.error('Server error');
            }
        }
        return Promise.reject(error);
    }
);

export default api;