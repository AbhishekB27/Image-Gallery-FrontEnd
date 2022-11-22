import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import verifyToken from "./actions/auth";
import { getAllCollections } from "./actions/collectionI";
import { getReview } from "./actions/review";
import { getAllImages } from "./actions/usersData";

import "./App.css";
import { MyApp } from "./components/MyApp";
import { networkStatus } from "./network/networkStatus";

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {token,user} = useSelector(state => state.auth)
  const isOnline = window.navigator.onLine
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(isOnline){
      dispatch(getAllImages())
      if(token === null){
        navigate('/')
      }
      else {
        dispatch(verifyToken(token))
        dispatch(getAllCollections(user._id))
        dispatch(getReview())
      }
    }
    else{
    networkStatus()
    }
  }, [token,isOnline])
  
  
  return (
    <div className="">
        <MyApp />
    </div>
  );
}

export default App;

