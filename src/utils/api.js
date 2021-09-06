import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nc-reviews-server.herokuapp.com/api'
});

