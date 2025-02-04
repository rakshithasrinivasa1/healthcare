import axios from 'axios';

// Create an Axios instance
const instance = axios.create({
  baseURL: 'mongodb://localhost:27017', // Replace with your backend URL
});

export default instance;
