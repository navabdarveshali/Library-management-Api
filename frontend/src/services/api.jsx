import axios from 'axios';

const api = axios.create({
    // http://localhost:3000/api/users/register
    baseURL: 'http://localhost:3000/api/users',
});

export const registerUser = (userData) => api.post('/users/register', userData);
export const loginUser = (credentials) => api.post('/users/login', credentials);
export const updateUser = (userId, updatedData) => api.put(`/users/update/${userId}`, updatedData);