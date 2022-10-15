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
import { compressedImage } from "./compressedImage";

export const ImageCard = ({ grdCls, itemId, imgUrl, userName, userAvtar }) => {
  // const { user } = useSelector((state) => state.auth);
   let compImg = compressedImage(`${imgUrl}`)
  return (
    <div class={`relative rounded-md overflow-hidden w-full h-full ${grdCls}`}>
      <Link className="peer " to={`/bigImage/${itemId}`}>
        <img
          class={`${
            imgUrl === "" && "invisible"
          } w-full h-full  object-cover object-center md:hover:scale-110 md:transition-all`}
          // src={imgUrl}
          sizes="(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw"
          srcset={`${compImg}&tr=w-100 100w,${compImg}&tr=w-200 200w,${compImg}&tr=w-300 300w,${compImg}&tr=w-400 400w,${compImg}&tr=w-500 500w,${compImg}&tr=w-600 600w,${compImg}&tr=w-700 700w,${compImg}&tr=w-800 800w,${compImg}&tr=w-900 900w,${compImg}&tr=w-1000 1000w,${compImg}&tr=w-1100 1100w,${compImg}&tr=w-1200 1200w,${compImg}&tr=w-1300 1300w,${compImg}&tr=w-1400 1400w,${compImg}&tr=w-1500 1500w,${compImg}&tr=w-1600 1600w,${compImg}&tr=w-1700 1700w,${compImg}&tr=w-800 800w,${compImg}&tr=w-1900 1900w,${compImg}&tr=w-2000 2000w`}
          src={`${compImg}&tr=w-1000`}
        />
      </Link>
      <div className="absolute top-0 z-10 translate-y-0 bg-black/50 md:peer-hover:translate-y-0 md:hover:translate-y-0 md:translate-y-[-100%] md:transition-all w-full flex justify-end items-center gap-2 px-2 py-1 text-sm md:text-lg">
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
      <div className="w-full absolute z-10 translate-y-0 bg-black/50 md:peer-hover:translate-y-0 md:hover:translate-y-0 md:translate-y-[100%] md:transition-all  bottom-0 flex justify-between items-center gap-2 px-2 py-1 text-sm md:text-lg">
        <motion.div
          whileTap={{ scale: 0.7 }}
          className="flex gap-2 text-white justify-start items-center"
        >
          <div className="relative w-[2rem] h-[2rem] rounded-full">
            <img
              className="w-full md:hover:grayscale md:hover:cursor-pointer h-full object-cover rounded-full"
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
              <FontAwesomeIcon
                className="animate-bounce"
                icon={faArrowDown}
              />{" "}
            </motion.button>
          </abbr>
        </a>
      </div>
    </div>
  );
};
