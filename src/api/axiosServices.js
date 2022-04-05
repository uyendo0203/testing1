import axios from 'axios';

const api = axios.create({
    // baseURL: process.env.DOMAIN_API,
    baseURL: 'https://staging.tmrw.com.sg/fiction/cms/web/api',
    withCredentials: false,
});

export default api;