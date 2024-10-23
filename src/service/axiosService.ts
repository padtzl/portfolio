import axios from 'axios';
import { API_URL } from '@/environment';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        // Check if the request data is an instance of FormData
        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multipart/form-data';
        } else {
            config.headers['Content-Type'] = 'application/json';
        }

        // Optional: Add auth token if needed
        /*const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }*/
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Error Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors, e.g., unauthorized access, network issues, etc.
        if (error.response && error.response.status === 401) {
            console.log('Unauthorized. Redirecting to login...');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
