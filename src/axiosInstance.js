import axios from 'axios';
const axiosI = axios.create({
    baseURL:'https://imagal-backend.herokuapp.com/api/v1'
})
export default axiosI