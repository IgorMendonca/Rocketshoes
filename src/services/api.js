import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3939',
});

export default api;
