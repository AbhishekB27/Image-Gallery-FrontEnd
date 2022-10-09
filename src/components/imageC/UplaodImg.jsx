import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  faHand,
  faHandHoldingHeart,
  faRightFromBracket,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { DragNDrop } from "./DragNDrop";

export const UploadImg = ({ uModal, setUmodal }) => {
  const { user } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.loader);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageData, setImageData] = useState({
    images: "",
  });
  const handleProfile = () => {
    setUmodal(!uModal);
  };
  const handleImages = () => {
    console.log(imageData);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-9 text-white justify-start items-center z-50 absolute top-[8.5rem] md:top-[3.2rem] min-h-[92vh] h-auto w-full bg-black/90"
    >
      <div className="w-full h-fit px-2">
        {" "}
        <motion.button onClick={handleProfile} whileTap={{ scale: 0.7 }}>
          <FontAwesomeIcon className="md:text-2xl" icon={faTimes} />
        </motion.button>{" "}
      </div>
      <div className="flex flex-col justify-center items-center gap-2 p-1 w-full h-full">
        <DragNDrop setImageData={setImageData} />
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleImages}
          className="px-6 py-1 w-[80%] bg-gray-50 text-black text-3xl font-normal rounded-md"
        >
            {isLoading ? <div className="w-[35px] h-[35px] animate-spin rounded-full border-[5px] border-t-slate-300 border-slate-600"></div> : 'Upload'}
        </motion.button>
      </div>
    </motion.div>
  );
};