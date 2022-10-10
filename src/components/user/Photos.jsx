import React from "react";
import { useSelector } from "react-redux";
import { ImageCard } from "../imageC/ImageCard";
import noImage from "./NoImage.png";

export const Photos = () => {
  let { images } = useSelector((state) => state.images);
  let { user } = useSelector((state) => state.auth);

  return (
    <div className="w-full grid place-items-center border-yellow-200">
      {images.length === 0 ? (
        <div className="text-center text-gray-700 dark:text-gray-300 font-ubuntu md:text-3xl text-lg">
          <img className="object-cover object-center" src={noImage} alt="" />
          No Images
        </div>
      ) : (
        <div className="2xl:w-[1535px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-yellow-200">
          {images.filter(item=> item.user._id === user._id ).map((item) => {
            return <ImageCard imgUrl={item.imageUrl} userName={item.user.userName} userAvtar={item.user.avtar} />
          })}
        </div>
      )}
    </div>
  );
};
