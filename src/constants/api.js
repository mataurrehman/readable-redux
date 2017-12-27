
import axios from 'axios'
export const API = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        'Authorization': process.env.REACT_APP_API_TOKEN
    }
})
export default API