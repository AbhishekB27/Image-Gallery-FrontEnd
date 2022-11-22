import axiosI from "../axiosInstance";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from "@firebase/util";

export const getAllCollections = (userId)=> async(dispatch)=>{
    try {
        dispatch({
            type: "SET_LOADING",
            payload: { state: true },
          });
          const response = await axiosI.get("/collection/all")
          const { status, data, message } = response.data;
          if (status === "Success") {
            // toast.success(message, { position: "top-center" });
            const filterData = data.filter(item => item.userId === userId);
            if(data.length === 0){
                // console.log(...data)
                dispatch({
                  type: "LOAD_COLLECTIONS",
                  payload: [],
                });
            }
            else{
                // console.log(...data)
                dispatch({
                    type: "LOAD_COLLECTIONS",
                    payload: [...filterData] 
                  });
            }
          } else {
            toast.error(message, { position: "top-center" });
            console.log(message);
          }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message, { position: "top-center" })
    }
    finally{
      dispatch({
        type: "SET_LOADING",
        payload: { state: false },
      });
    }
}

export const createCollections = ({cName,cDescription,userId,imageUrls})=> async(dispatch)=>{
  console.log(userId + ' : ' + imageUrls)
  try {
    dispatch({
      type: "SET_LOADING",
      payload: { state: true },
    });
    const response = await axiosI.post('/collection/add',{
      cName,
      cDescription,
      userId,
      imageUrls
    })
    console.log(response.data)
    const { status, data, message } = response.data;
    if(status === 'Success'){
      toast.success(message, { position: "top-center" })
      dispatch({
        type: "ADD_COLLECTIONS",
        payload: data 
      });
    }
    else{
      toast.error(message, { position: "top-center" })
    }
  } catch (error) {
    console.log(error.message)
    toast.error(error.message, { position: "top-center" })
  }
  finally{
    dispatch({
      type: "SET_LOADING",
      payload: { state: false },
    });
  }
}
export const updateCollections  = ({cId,imageUrl,userId}) => async(dispatch)=>{
  try {
    dispatch({
      type: "SET_LOADING",
      payload: { state: true },
    });
    const response = await axiosI.put('/collection/addA',{cId,imageUrl})
    const {status,data,message} = response.data
    if(status === "Success"){
      toast.success(message, { position: "top-center" })
      const response = await axiosI.get("/collection/all")
      const {data} = response.data
      const filterData = data.filter(item => item.userId === userId);
      dispatch({
        type:'UPDATE_COLLECTIONS',
        payload: [...filterData]
      })

    }
  } catch (error) {
    
  }
  finally{
    dispatch({
      type: "SET_LOADING",
      payload: { state: false },
    });
  }
}