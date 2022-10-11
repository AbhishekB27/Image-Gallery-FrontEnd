import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImageCard } from "../imageC/ImageCard";
import { HeroSection } from "./HeroSection";
import noImage from "./images/NoImage.png";

export const HomePage = () => {
  const { images } = useSelector((state) => state.images);
  // console.log(images)
  // images.map(item=>{
  //   console.log(item.imageUrl)
  // })
  // console.log("hello");
  return (
    <div className="container flex flex-col space-y-8 justify-center items-center">
      <HeroSection />
      <div className="w-full grid place-items-center border-yellow-200">
        {images.length === 0 ? (
          <div className="text-center text-gray-700 dark:text-gray-300 font-ubuntu md:text-3xl text-lg">
            <img className="object-cover object-center" src={noImage} alt="" />
            No Images
          </div>
        ) : (
          <div className="2xl:w-[1535px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-yellow-200">
            {images.map((item) => {
              return (
                  <ImageCard
                    itemId={item._id}
                    imgUrl={item.imageUrl}
                    userName={item.user.userName}
                    userAvtar={item.user.avtar}
                  />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
