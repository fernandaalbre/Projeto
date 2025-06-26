import axios from "axios";

export const key = "4a5593f00c8808946e2dbf6337d3aa5ee4c8a7aa";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4', 
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;

