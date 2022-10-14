import {
  faArrowDown,
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
import { Link, useNavigate, useParams } from "react-router-dom";
import { setReviewWithImage } from "../../actions/usersData";
import { uploadUserReview } from "../../actions/review";
import { useHistory } from "react-router-dom";
import { Review } from "./Review";

export const BigImage = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { images } = useSelector((state) => state.images);
  const { reviews } = useSelector((state) => state.reviews);
  const { isLoading } = useSelector((state) => state.loader);
  const navigate = useNavigate();
  const [big, setBig] = useState(false);
  const { imgId } = useParams();
  const selectedImage = images.filter((item) => item._id === imgId);
  const createdDate =
    selectedImage.length !== 0
      ? new Date(selectedImage[0].created).toUTCString()
      : "10-10-2022";
  // console.log(selectedImage[0].imageUrl)
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [review, setReveiw] = useState("");
  const dispatch = useDispatch();
  const handleReview = (event) => {
    const value = event.target.value;
    setReveiw(value);
  };
  const uploadReview = () => {
    const stars = 4;
    dispatch(uploadUserReview({ stars, review, imgId, userId: user._id }));
  };
  const removeBig = () => {
    setBig(!big);
    navigate(-1);
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className={`absolute flex px-2 py-2 flex-col justify-start items-center top-[3.25rem] w-full min-h-screen h-auto dark:bg-[#14213d]/95 dark:text-[#edf2f4] bg-[#edf2f4]/95 text-[#14213d] z-10 ${
          big && "hidden"
        }`}
      >
        <div className="w-full">
          {" "}
          <motion.div
            onClick={removeBig}
            className={`w-fit h-fit`}
            whileTap={{ scale: 0.7 }}
          >
            {" "}
            <FontAwesomeIcon
              className="md:text-2xl cursor-pointer text-lg px-2 py-1"
              icon={faTimes}
            />
          </motion.div>{" "}
        </div>
        <div className="container grid place-items-center gap-3">
          <div
            className={`relative w-full max-w-[45rem] h-[40rem] ${
              selectedImage.length === 0 && "bg-slate-400 animate-pulse"
            }`}
          >
            <img
              className="object-cover peer object-center w-full h-full"
              src={selectedImage.length === 0 ? avtar : selectedImage[0].imageUrl}
              alt=""
            />
            <div className="flex gap-2  hover:cursor-pointer peer-hover:opacity-100 hover:opacity-100 opacity-0 overflow-hidden absolute w-full bottom-0 md:text-2xl text-lg font-normal p-1 justify-between items-center transition-all duration-100 ease-linear bg-black/50">
              <div className="relative text-white flex justify-start items-center gap-2  rounded-full">
                <img
                  className="md:w-[3.5rem] w-[2rem] md:h-[3.5rem] h-[2rem] hover:grayscale object-cover rounded-full"
                  src={
                    selectedImage.length === 0
                      ? avtar
                      : (selectedImage[0].user.avtar === null ? avtar : selectedImage[0].user.avtar)
                  }
                  alt=""
                />
                {selectedImage.length !== 0 && selectedImage[0].user.userName}
              </div>
              <a href={selectedImage[0].imageUrl} target="_blank" download>
                <abbr title="Download">
                  <motion.button
                    whileTap={{ scale: 0.7 }}
                    className="px-4 py-1 w-[60px] bg-slate-100 dark:text-black rounded-md"
                  >
                    {" "}
                    <FontAwesomeIcon
                      className="animate-bounce"
                      icon={faArrowDown}
                    />{" "}
                  </motion.button>
                </abbr>
              </a>
            </div>
          </div>
          <div className="border-purple-700 w-full flex flex-col gap-3 justify-center items-center">
            <div className="text-base md:text-xl w-full flex justify-around items-center">
              <div>
                {" "}
                Likes <FontAwesomeIcon icon={faThumbsUp} /> : 491{" "}
              </div>
              <div>
                {" "}
                Created <FontAwesomeIcon icon={faCalendar} /> : {createdDate}{" "}
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
                disabled={isLoading ? true : false}
                value={review}
                className={`${
                  isLoading && "cursor-not-allowed"
                } text-black resize-none placeholder:text-slate-900 placeholder:font-medium border-2 border-slate-700 px-2 py-1 outline-none rounded-md`}
                name=""
                id=""
                placeholder="Add Review"
                cols="60"
                rows="8"
              ></textarea>
              <motion.button
                onClick={uploadReview}
                whileTap={{ scale: 0.7 }}
                class="hover:shadow-form grid place-items-center h-[45px] w-full rounded-md bg-[#6A64F1] py-1 px-8 text-base font-semibold outline-none"
              >
                {isLoading ? (
                  <div className="w-[35px] h-[35px] animate-spin rounded-full border-[5px] border-t-slate-300 border-slate-600"></div>
                ) : (
                  "Upload"
                )}
              </motion.button>
            </div>
          </div>
          <Review reviews={reviews} imgId={imgId} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
