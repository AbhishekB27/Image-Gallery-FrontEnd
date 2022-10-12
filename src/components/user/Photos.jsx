import React from "react";
import { useSelector } from "react-redux";
import { ImageCard } from "../imageC/ImageCard";
import noImage from "./NoImage.png";

export const Photos = () => {
  let { images } = useSelector((state) => state.images);
  let { user } = useSelector((state) => state.auth);
  const gridArray = ['lg:row-span-2 md:col-span-3 sm:col-span-2','lg:col-span-2 md:col-span-4 sm:col-span-3','lg:col-span-3 md:col-span-4 md:row-span-2 sm:col-span-3','lg:col-span-2 md:col-span-3 sm:col-span-2','md:col-span-3 sm:col-span-5']
  let gIndex = 0

  return (
    <div className="w-full grid place-items-center border-yellow-200">
      {images.length === 0 ? (
        <div className="text-center text-gray-700 dark:text-gray-300 font-ubuntu md:text-3xl text-lg">
          <img className="object-cover object-center" src={noImage} alt="" />
          No Images
        </div>
      ) : (
        <div className="2xl:w-[1535px] grid grid-cols-1 lg:grid-cols-8 md:grid-cols-7 sm:grid-cols-5 gap-2 auto-rows-auto sm:auto-rows-[250px_350px] md:auto-rows-[250px_350px] grid-flow-dense">

          {images
            .filter((item) => item.user._id === user._id)
            .map((item,index) => {
              gIndex++
              if(index % 5 === 0){
                gIndex=0
              }
              return (
                <ImageCard
                  grdCls={ gridArray[gIndex]}
                  key={item._id}
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
  );
};
