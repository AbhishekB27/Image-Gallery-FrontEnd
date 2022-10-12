import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowDown,
  faDownload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import avtar from "./UserAvtar.jpg";
import { Link } from "react-router-dom";

export const ImageCard = ({grdCls,itemId, imgUrl,userName,userAvtar }) => {

  // const { user } = useSelector((state) => state.auth);
  // console.log(imgUrl === '')
  return (
    <div class={`relative overflow-hidden w-full h-full ${grdCls}`}>
       <Link className="peer " to={`/bigImage/${itemId}`}>
      <img
        class={`${imgUrl === '' && "invisible"} w-full h-full object-cover object-[50%_50%] hover:scale-110 transition-all`}
        src={ imgUrl  }
      />
      </Link>
      <div className="absolute top-0 z-10 bg-black/50 peer-hover:translate-y-0 hover:translate-y-0 translate-y-[-100%] transition-all w-full flex justify-end items-center gap-2 px-2 py-1 text-sm md:text-lg">
          <abbr title="Like">
            <motion.button
              whileTap={{ scale: 0.7 }}
              className="px-4 py-1 w-[60px] bg-slate-100 dark:text-black rounded-md"
            >
              {" "}
              <FontAwesomeIcon icon={faHeart} />{" "}
            </motion.button>
          </abbr>
          <abbr title="Add Collection">
            <motion.button
              whileTap={{ scale: 0.7 }}
              className="px-4 py-1 w-[60px] bg-slate-100 dark:text-black rounded-md"
            >
              {" "}
              <FontAwesomeIcon icon={faPlus} />{" "}
            </motion.button>
          </abbr>
        </div>
        <div className="w-full absolute z-10  bg-black/50 peer-hover:translate-y-0 hover:translate-y-0 translate-y-[100%] transition-all  bottom-0 flex justify-between items-center gap-2 px-2 py-1 text-sm md:text-lg">
          <motion.div
            whileTap={{ scale: 0.7 }}
            className="flex gap-2 text-white justify-start items-center"
          >
            <div className="relative w-[2rem] h-[2rem] rounded-full">
              <img
                className="w-full hover:grayscale hover:cursor-pointer h-full object-cover rounded-full"
                src={userAvtar === null || "" || undefined ? avtar : userAvtar}
                alt=""
              />
            </div>
            {userName}
          </motion.div>
          <a href={imgUrl} target="_blank" download>
          <abbr title="Download">
            <motion.button
              whileTap={{ scale: 0.7 }}
              className="px-4 py-1 w-[60px] bg-slate-100 dark:text-black rounded-md"
            >
              {" "}
              <FontAwesomeIcon icon={faArrowDown} />{" "}
            </motion.button>
          </abbr>
          </a>
        </div>
     
    </div>
  );
};
