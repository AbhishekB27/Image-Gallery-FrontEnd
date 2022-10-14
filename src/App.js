import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import verifyToken from "./actions/auth";
import { getReview } from "./actions/review";
import { getAllImages } from "./actions/usersData";

import "./App.css";
import { MyApp } from "./components/MyApp";

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {token,user} = useSelector(state => state.auth)
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(getAllImages())
    if(token != null){
      dispatch(verifyToken(token))
      dispatch(getReview())
    }
    else {
      navigate('/')
    }
  }, [token])
  
  
  return (
    <div className="">
        <MyApp />
    </div>
  );
}

export default App;

