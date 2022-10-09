import React from 'react'
import { ImageCard } from '../imageC/ImageCard'

export const Photos = () => {
  const custoemGrid = ['lg:col-span-2','lg:col-span-2 row-span-2','lg:col-span-2']
  return (
    <div className='2xl:w-[1535px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-yellow-200'>
       <ImageCard item=''/>
       <ImageCard item=''/>
       <ImageCard item=''/>
       <ImageCard item='25'/>
       <ImageCard item='25'/>
       <ImageCard item='27'/>
       <ImageCard item='25'/>
       <ImageCard item='25'/>
       <ImageCard item='27'/>
       <ImageCard item='25'/>
       <ImageCard item='25'/><ImageCard item='27'/>
       <ImageCard item='25'/>
       <ImageCard item='25'/>

    </div>
  )
}
