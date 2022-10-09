// import axiosI from "../axiosInstance";
import authHeader from ".././auth_header";

import axiosI from "../axiosInstance";

const setImages = async ({ imgUrls, created, user, category }) => {
  try {
    return await axiosI.post(
      "/images/uplaod",
      {
        imgUrls,
        created,
        user,
        category,
      },
      { headers: authHeader() }
    );
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

const getImages = async () => {
  try {
    return await axiosI.get("/images/all");
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

//Route for createing a new review and updating a image 'review' field with it
const setReviewWithImage = async (id, stars, review) => {
  try {
    return await axiosI.post(`/images/image/${id}`, {
      stars,
      review,
    });
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

//Method for retrieving the image by pouplating a review
const getImageWithReview = async (id) => {
  try {
    return await axiosI.get(`/images/image/${id}`);
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

//Route for increment a like and updating a image 'like' field with it
const setLike = async (id, like) => {
  try {
    return axiosI.post(`/images/${id}/like`, {
      like,
    });
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
export default {
    getImages,
    setImages,
    setLike,
    setReviewWithImage,
    getImageWithReview
  };