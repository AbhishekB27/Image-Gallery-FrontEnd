import axios from 'axios';
const axiosI = axios.create({
    baseURL:'https://amaze-amage.herokuapp.com/api/v1'
})
export default axiosI