import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-ba6e6-default-rtdb.firebaseio.com/'
});

export instance;