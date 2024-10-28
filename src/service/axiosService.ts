import axios from 'axios';
import { API_URL } from '@/environment';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

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
