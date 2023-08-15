import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.DEV
    ? 'http://localhost:5000/citizens/all'
    : 'https://citizens-production.up.railway.app',
});
