import React from "react";
import aboutUs from './aboutUs.png'

export const AboutUs = () => {
  return (
    <div className="container relative flex md:flex-row flex-col mt-5">
      <div className="text-2xl flex md:flex-col justify-center items-center gap-3 md:h-[28rem] md:w-[20rem] text-[#edf2f4] dark:text-[#14213d] bg-[#14213d] dark:bg-[#edf2f4] first-letter:text-4xl font-medium border-b-2 border-[#14213d] dark:border-[#edf2f4]">
       <div className="md:flex flex-col justify-center items-center">
       <span>A</span><span>B</span><span>O</span><span>U</span><span>T</span>
       </div>
       <div className="md:flex flex-col justify-center items-center">
       <span>U</span><span>S</span>
       </div>
      </div>
      <div className="border-2 border-[#14213d] dark:border-[#edf2f4]">
      <div className="tracking-wide first-letter:text-4xl text-start font-medium px-2">
        Welcome to the Image Gallery! Here, you’ll find a stunning collection of
        photographs from around the world. From nature to cities, from abstract
        to architecture, each image has been carefully curated to provide you
        with a beautiful visual experience. Explore our selection of images and
        find the perfect one for your project or home. Whether you’re looking
        for a stunning backdrop for your website or a powerful image for your
        business, you’re sure to find something here. We are constantly updating
        our collection to ensure you have access to the latest and greatest
        images. So, take your time and enjoy the gallery. If you have any
        questions, please don’t hesitate to reach out – we’re always here to
        help.
      </div>
      </div>
    </div>
  );
};
