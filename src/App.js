// import logo from './logo.svg';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import getAllImages from "./actions/allImages";
// import { loadCart } from "./actions/cart";
// import { getProducts } from "./actions/product";
import verifyToken from "./actions/auth";
import { getAllImages } from "./actions/usersData";

import "./App.css";
import { MyApp } from "./components/MyApp";

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getProducts())
  // })
  
  const {token,user} = useSelector(state => state.auth)
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    if(token != null){
      console.log("run")
      dispatch(verifyToken(token))
      // console.log(user.email)
    }
    else {
      console.log(token)
      navigate('/login')
    }
  }, [token])
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token != null){
      console.log("run")
      dispatch(getAllImages())
    }
  }, [token])
  
  
  return (
    <div className="">
        <MyApp />
    </div>
  );
}

export default App;

