import axios from 'axios';
import { API_URL } from '@/environment';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'https://padietzel.de/wp-json/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

/*// Optional: Add a request interceptor to add auth tokens or other headers
axiosInstance.interceptors.request.use(
    (config) => {
        // Example: if you need to add an auth token
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);*/

// Error Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors, e.g., unauthorized access, network issues, etc.
        if (error.response && error.response.status === 401) {
            console.log('Unauthorized. Redirecting to login...');
            // Optional: Redirect to login page or handle as needed
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
