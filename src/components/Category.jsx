import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ImageCard } from './imageC/ImageCard'

const Category = () => {
    const {images} = useSelector( state => state.images)
    const {catName} = useParams()
    let filterImages = []
    if(catName != "all"){
       filterImages = images.filter(item => item.category === catName)
    }else{
        filterImages = images
    }
    console.log(catName)
    const gridArray = ['lg:row-span-2 md:col-span-3 sm:col-span-2','lg:col-span-2 md:col-span-4 sm:col-span-3','lg:col-span-3 md:col-span-4 md:row-span-2 sm:col-span-3','lg:col-span-2 md:col-span-3 sm:col-span-2','md:col-span-3 sm:col-span-5']
  let gIndex = 0
  return (
    <div className='flex flex-col gap-1'>
        <div className='lg:text-5xl font-medium font-poppins'>{catName.toUpperCase()} IMAGES:</div>
        <div className="w-full grid place-items-center border-yellow-200">
      {images.length === 0 ? (
        <div className="text-center text-gray-700 dark:text-gray-300 font-ubuntu md:text-3xl text-lg">
          <img className="object-cover object-center" alt="" />
          No Images
        </div>
      ) : (
        <div className="2xl:w-[1535px] grid grid-cols-1 lg:grid-cols-8 md:grid-cols-7 sm:grid-cols-5 gap-2 auto-rows-auto sm:auto-rows-[250px_350px] md:auto-rows-[250px_350px] grid-flow-dense">
          {filterImages
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
    </div>
  )
}

export default Category