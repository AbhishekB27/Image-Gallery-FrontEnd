import axiosI from "../axiosInstance";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const getAllImages = () => async(dispatch)=> {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: { state: true },
      });
      const imageData = await axiosI.get("/images/all");
    //   console.log(imageData);
      const { status, data, message } = imageData.data;
  
      if (status === "Success") {
        toast.success(message, { position: "top-center" });
        // const filterData = data.filter(item => item.user._id === user.id);
        if(data.length === 0){
            console.log(...data)
            dispatch({
              type: "LOAD_IMAGES",
              payload: [],
            });
        }
        else{
            // console.log(...data)
            dispatch({
                type: "LOAD_IMAGES",
                payload: [...data] 
              });
        }
      } else {
        toast.error(message, { position: "top-center" });
        console.log(message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center" });
    }
    finally{
      dispatch({
        type: "SET_LOADING",
        payload: { state: false },
      });
    }
  };

  export default getAllImages