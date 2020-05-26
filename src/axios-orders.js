import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-ef410.firebaseio.com/'
});

export default instance;