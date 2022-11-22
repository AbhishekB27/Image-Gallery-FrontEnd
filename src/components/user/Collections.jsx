import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { compressedImage } from "../imageC/compressedImage";
import imagePlaceholder from "./IP.png";


export const Collections = () => {
  const { collection } = useSelector((state) => state.collections);
  return (
    <div className="w-full flex gap-2 flex-wrap justify-start items-center">

      {collection.map((item) => {
        return (
          <div className="relative group w-[20rem] h-[16rem] grid grid-rows-2 grid-cols-2 gap-1">
            <div className="absolute w-0 group-hover:w-full transition-all overflow-hidden h-full bg-black/30 text-white grid cursor-pointer place-items-center text-xl font-medium">
              <Link to={``}> {item.cName} </Link>
            </div>
            <img className="object-cover row-span-2 w-[100%] h-[100%] " src={item.imageUrls[0] || imagePlaceholder} alt="" />
              <img className="object-cover w-[100%] h-[100%] " src={item.imageUrls[1] || imagePlaceholder} alt="" />
              <img className="object-cover w-[100%] h-[100%] " src={item.imageUrls[2] || imagePlaceholder} alt="" />

          </div>          
        );
      })}
    </div>
  );
};
