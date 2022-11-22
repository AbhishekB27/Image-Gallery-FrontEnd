import React from 'react'
import { ImageCard } from "../imageC/ImageCard";
import noImage from "./images/NoImage.png";
import { useSelector } from 'react-redux';


const PhotoSection = () => {
    const { images } = useSelector((state) => state.images);
    const {isLoading} = useSelector((state) => state.loader);
  const gridArray = ['lg:col-span-4 lg:row-span-2 md:col-span-3 sm:col-span-3','lg:col-span-3 md:col-span-4 sm:col-span-2','lg:col-span-6 md:col-span-4 md:row-span-2 sm:col-span-5','lg:col-span-4 md:col-span-3 sm:col-span-2','md:col-span-3 sm:col-span-3']
  // const gridArray = ["sm:col-span-3","sm:col-span-2","sm:col-span-5","sm:col-span-2","sm:col-span-3"]

  let gIndex = 0
  return (
    <div className="w-full grid place-items-center border-yellow-200">
        {isLoading ? (
          <div className="text-center text-gray-700 dark:text-gray-300 font-ubuntu md:text-3xl text-lg">
            <img className="object-cover object-center" src={noImage} alt="" />
            No Images
          </div>
        ) : (
          // <div className="2xl:w-[1535px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-yellow-200">
          <div className="2xl:w-[1535px] w-full grid grid-cols-1 lg:grid-cols-10 md:grid-cols-7 sm:grid-cols-5 gap-4 auto-rows-auto sm:auto-rows-[250px_350px] md:auto-rows-[250px_350px] grid-flow-dense">
          {images.map((item,index) => {
            gIndex++
            if(index % 5 === 0){
              gIndex=0
            }
              return (
                  <ImageCard
                    grdCls={ gridArray[gIndex]}
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
  )
}
export default PhotoSection