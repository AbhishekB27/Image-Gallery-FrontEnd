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

export const ImageCard = ({ imgUrl,userName,userAvtar }) => {
  // console.log(imageUrl)

  // const { user } = useSelector((state) => state.auth);
  return (
    <div class={`relative overflow-hidden`}>
      {" "}
      {/* w-[25.80rem] */}
      <img
        class={`object-cover object-center w-full h-[380px]`}
        src={
          imgUrl === "" || null || undefined ? 'https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg': imgUrl
        }
      />
      <div class="absolute flex justify-between flex-col bottom-0 left-0 right-0 w-full h-full opacity-0 overflow-hidden hover:opacity-100 cursor-pointer transition-all duration-100 ease-linear bg-gradient-to-t from-black/50 via-gray-400/5 to-black/50">
        <div className="w-full flex justify-end items-center gap-2 px-2 py-1 text-sm md:text-lg">
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
        <div className="w-full flex justify-between items-center gap-2 px-2 py-1 text-sm md:text-lg">
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
    </div>
  );
};
