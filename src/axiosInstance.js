import axios from 'axios';
const axiosI = axios.create({
    baseURL:'http://localhost:8080/api/v1'
})
export default axiosI