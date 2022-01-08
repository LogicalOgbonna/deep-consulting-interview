/* eslint-disable no-undef */
import axios from 'axios';

const weatherStack = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://api.weatherstack.com' : 'http://api.weatherstack.com'
});

export default weatherStack;