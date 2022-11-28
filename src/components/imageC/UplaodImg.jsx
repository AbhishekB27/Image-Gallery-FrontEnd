import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setImages } from "../../actions/usersData";
import image from "../home/image";
import DragNDrop from "./DragNDrop";
// import setImages from "../../actions/usersData";


export const UploadImg = ({ uModal, setUmodal }) => {
  const { user,token } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.loader);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  }, [token])
  const [imageData, setImageData] = useState([]);
  const handleProfile = () => {
    setUmodal(!uModal);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col md:gap-2 px-2 md:py-4 z-50 text-white justify-center items-center fixed top-0 bottom-0 left-0 right-0 min-h-screen h-auto w-full bg-black/70"
    >
      <div className="w-full h-fit px-2">
        {" "}
        <motion.button onClick={handleProfile} whileTap={{ scale: 0.7 }}>
          <FontAwesomeIcon className="md:text-2xl" icon={faTimes} />
        </motion.button>{" "}
      </div>
      <div className="flex flex-col justify-center items-center gap-2 container">
        <DragNDrop
         setImageData={setImageData} />
      </div>
    </motion.div>
  );
};
