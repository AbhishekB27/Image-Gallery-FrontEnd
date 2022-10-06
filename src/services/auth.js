import axiosI from "../axiosInstance";

const register = async({avtar,username,firstName,lastName, email, password,confirmPassword,designation}) => {
    return await axiosI.post("/auth/signup", {
        avtar,
        username,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        designation
      });
};

const verifyToken = async(token)=>{
        return await axiosI.get(`/auth/verify/${token}`)     
}
const login = async(email, password) => {
        return await axiosI.post('auth/login',{
            email,
            password,
        })
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  verifyToken,
  logout,
};