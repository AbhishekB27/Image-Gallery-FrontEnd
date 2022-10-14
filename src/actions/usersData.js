import authHeader from "../auth_header";
import axiosI from "../axiosInstance";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export const setImages = ({ imgUrls ,user }) => async(dispatch) => {
  try {
    dispatch({
      type: "SET_LOADING",
      payload: { state: true },
    });
    console.log("Hello" + " : " + authHeader());
    const imageData = await axiosI.post("/images/upload",
      {
        imgUrls,
        user,
      },
      { headers: authHeader() }
    );

    console.log(imageData);
    const { status, data, message } = imageData.data;
    // console.log(data + " : " + imgUrls)

    if (status === "Success") {
      toast.success(message, { position: "top-center" });
      dispatch({
        type: "UPLOAD_IMAGES",
        payload: { uploadSuccess: true },
      });
    } else {
      toast.error(message, { position: "top-center" });
      dispatch({
        type: "UPLOAD_FAILURE",
        payload: { uploadSuccess: false },
      });
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
}

//Route for createing a new review and updating a image 'review' field with it
export const setReviewWithImage =({stars,review,id}) => async (dispatch)=>{
  try {
    dispatch({
      type: "SET_LOADING",
      payload: { state: true },
    });

    const imageData = await axiosI.post(`/images/image/${id}`, {
      stars,
      review,
    });
    console.log(imageData);
    const { status, data, message } = imageData.data;

    if (status === "Success") {
      toast.success(message, { position: "top-center" });
      dispatch({
        type: "UPDATE_SUCCESS",
        payload: {  },
      });
    } else {
      toast.error(message, { position: "top-center" });
      console.log(message);
    }
  } catch (error) {
    console.log(error.message);
    const imageData = error.message;
  }
  finally{
    dispatch({
      type: "SET_LOADING",
      payload: { state: false },
    });
  }
};

//Method for retrieving the image by pouplating a review
// const getImageWithReview = (id) => async (dispatch)=>{
//   try {
//     dispatch({
//       type: "SET_LOADING",
//       payload: { state: false },
//     });
//     const imageData = await axiosI.get(`/images/image/${id}`);
//   } catch (error) {
//     console.log(error.message);
//     const imageData = error.message;
//   }
//   finally{
//     dispatch({
//       type: "SET_LOADING",
//       payload: { state: false },
//     });
//   }
// };

//Route for increment a like and updating a image 'like' field with it
// 

export const getAllImages = () => async(dispatch)=> {
  try {
    dispatch({
      type: "SET_LOADING",
      payload: { state: true },
    });
    const imageData = await axiosI.get("/images/all");
  //   console.log(imageData);
    const { status, data, message } = imageData.data;

    if (status === "Success") {
      // toast.success(message, { position: "top-center" });
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
