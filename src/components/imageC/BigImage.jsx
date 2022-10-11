import {
  faCalendar,
  faTags,
  faThumbsDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import avtar from "./UserAvtar.jpg";
import noReview from "./NoReview.png";
import { faSmile, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { setReviewWithImage } from "../../actions/usersData";

export const BigImage = () => {
  const { user,token } = useSelector((state) => state.auth);
  const { images, review } = useSelector((state) => state.images);
  const navigate = useNavigate()
  const {imgId} = useParams()
  const selectedImage = images.filter(item => item._id === imgId)
  const createdDate = selectedImage.length !== 0 ? new Date(selectedImage[0].created) : '10-10-2022'
  // console.log(createdDate.toUTCString())
useEffect(() => {
  if(!token){
    navigate('/login')
  }
}, [token])

  // console.log(images, review);
  const [iReveiw, setReveiw] = useState("");
  const dispatch = useDispatch()
  const handleReview = (event) => {
    const value = event.target.value;
    setReveiw(value);
  };
  const uploadReview = ()=>{
    dispatch(setReviewWithImage({review,id:imgId}))
  }
  return (
    <AnimatePresence>
      <div className="absolute flex px-2 py-2 flex-col justify-start items-center top-[0] w-full min-h-screen h-auto bg-white/95 z-10">
        <div className="w-full">
          {" "}
          <motion.div className="w-fit h-fit" whileTap={{ scale: 0.7 }}>
            {" "}
            <FontAwesomeIcon
              className="md:text-2xl cursor-pointer text-lg text-black px-2 py-1"
              icon={faTimes}
            />{" "}
          </motion.div>{" "}
        </div>
        <div className="container grid place-items-center gap-3">
          <div className="relative w-full max-w-[45rem]">
            <img
              className="object-cover peer object-center"
              src={selectedImage[0].imageUrl}
              alt=""
            />
            <div className="flex gap-2  hover:cursor-pointer peer-hover:opacity-100 hover:opacity-100 opacity-0 overflow-hidden absolute w-full bottom-0 md:text-2xl text-lg font-normal text-white p-1 justify-start items-center transition-all duration-100 ease-linear bg-gradient-to-t from-black/50 via-gray-400/5 to-black/50">
              <div className="relative md:w-[3.5rem] w-[2rem] md:h-[3.5rem] h-[2rem] rounded-full">
                <img
                  className="w-full hover:grayscale h-full object-cover rounded-full"
                  src={user.avtar === null || "" ? avtar : user.avtar}
                  alt=""
                />
              </div>
              Abhishek Bahuguna
            </div>
          </div>
          <div className="border-purple-700 w-full flex flex-col gap-3 justify-center items-center">
            <div className="text-black text-base md:text-xl w-full flex justify-around items-center">
              <div>
                {" "}
                Likes <FontAwesomeIcon icon={faThumbsUp} /> : 491{" "}
              </div>
              <div>
                {" "}
                Created <FontAwesomeIcon icon={faCalendar} /> : {createdDate.toUTCString()}{" "}
              </div>
              <div>
                {" "}
                Free <FontAwesomeIcon icon={faTags} /> :{" "}
                <FontAwesomeIcon icon={faSmile} />{" "}
              </div>
            </div>
            <div className="flex flex-col w-full md:w-[68%] gap-3">
              <textarea
                onChange={handleReview}
                value={iReveiw}
                className="resize-none placeholder:text-slate-900 placeholder:font-medium border-2 border-slate-700 px-2 py-1 outline-none rounded-md"
                name=""
                id=""
                placeholder="Add Review"
                cols="60"
                rows="8"
              ></textarea>
              <motion.button
              onClick={uploadReview}
                whileTap={{ scale: 0.7 }}
                className="px-4 py-2 bg-slate-300 rounded-md"
              >
                Upload
              </motion.button>
            </div>
          </div>
          <div className="w-full border-t-2 border-slate-400 pt-2 flex flex-col gap-3 justify-center items-center">
            {selectedImage[0].review.length === 0 ? (
              <div className="text-center text-base text-black md:text-2xl">
                <img
                  className="object-cover h-fit object-center"
                  src={noReview}
                  alt=""
                />
                No Reviews
              </div>
            ) : (
              review.map((item) => {
                return (
                  <div className="w-full md:w-[68%] border-2 border-slate-400 rounded-md p-1">
                    <div className="flex gap-2 text-black justify-start items-center">
                      <div className="relative w-[3rem] h-[3rem] rounded-full">
                        <img
                          className="w-full hover:grayscale hover:cursor-pointer h-full object-cover rounded-full"
                          src={user.avtar === null || "" ? avtar : user.avtar}
                          alt=""
                        />
                      </div>
                      Abhishek Bahuguna
                    </div>
                    <div>
                      {" "}
                      This is awesome image.I never see like it before{" "}
                    </div>
                    <div className="flex justify-start items-center gap-10">
                      {" "}
                      <FontAwesomeIcon
                        className="cursor-pointer md:text-xl hover:text-blue-700 active:scale-90"
                        icon={faThumbsUp}
                      />{" "}
                      <FontAwesomeIcon
                        className="cursor-pointer md:text-xl active:scale-90 hover:text-slate-400"
                        icon={faThumbsDown}
                      />{" "}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
