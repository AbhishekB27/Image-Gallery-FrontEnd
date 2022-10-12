import authHeader from "../auth_header";
import axiosI from "../axiosInstance";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const uploadUserReview = ({stars,review,userId,imgId}) => async (dispatch)=>{
    try {
        dispatch({
            type: "SET_LOADING",
            payload: { state: true },
          });
          console.log(stars,review,imgId,userId)
          const res = await axiosI.post('/reviews/add',{
            stars,review,userId,imgId
          })
          const {status, data, message} = res.data
          if(status === 'Success'){
              toast.success(message, { position: "top-center" })
        const res = await axiosI.get('/reviews/all')

            dispatch({
                type:'ADD_REVIEW',
                payload:res.data.data
            })
          }
          else{
            console.log(message)
            toast.error(message, { position: "top-center" })
          }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message, { position: "top-center" });
    }
    finally{
        dispatch({
            type: "SET_LOADING",
            payload: { state: false },
          });
    }
}

export const getReview = ()=> async(dispatch)=> {
    try {
        dispatch({
            type: "SET_LOADING",
            payload: { state: true },
          });
        const res = await axiosI.get('/reviews/all')
        const {status, data, message} = res.data
        if (status === 'Success'){
            // toast.success(message, { position: "top-center" })
            dispatch({
                type:'LOAD_REVIEWS',
                payload: [...data] 
            })
        }
        else{
            console.log(message)
            toast.error(message, { position: "top-center" })
          }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message, { position: "top-center" });
    }
    finally{
        dispatch({
            type: "SET_LOADING",
            payload: { state: false },
          });
    }
}