import axios from 'axios';

export const baseApi = axios.create({
    baseURL: 'http://localhost:5174/',
    timeout: 1000,
});