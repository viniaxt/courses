import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.3.2:3333' // url genymotion
});

export default api;
