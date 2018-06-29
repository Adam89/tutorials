import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burget-52cc0.firebaseio.com/'
});

export default instance;