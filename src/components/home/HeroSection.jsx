import React, { useEffect, useMemo, useState } from 'react'
import ecom from './images/ecomm.png'
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from 'react-redux';
import image from './image';


export const HeroSection = () => {
  const {isLoading} = useSelector(state=>state.loader)
  let url = new URL('https://example.com?foo=1&bar=2&foo=3');
  let params = new URLSearchParams(url.search).values();
  console.log(params)
  // console.log(isLoading)
  const [count, setCount] = useState(0)
  useEffect(() => {
    // console.log(count)
    const intervalId = setInterval(() => {
      if(image.length-1 === count){
        return setCount(0)
      }
      return setCount(prevCount => prevCount + 1);
    }, 3500);
  
    return () => clearInterval(intervalId);
  }, [count]);
  // const [isLoad, setLoading] = useState(isLoading)
  // console.log(isLoading)
  // useMemo(() => {
  //   return isLoading === false ? setLoading(!isLoad) : setLoading(isLoad)
  // } , [isLoading])
  // useEffect(() => {
  //   // setLoading(isLoading)
  //   setTimeout(() => {
  //     setLoading(!isLoad)
  //   }, 1800);
  // },[])
  
  return (
    <div className='container h-auto min-h-[85vh] c w-full flex flex-col md:flex-row md:justify-center md:items-center border-lime-300'>
      <motion.div
      initial={{ opacity: 0, scale: 0.5, }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }} className={`w-full md:order-2 flex justify-center items-center md:w-[40rem] h-[250px] md:min-h-[380px] ${isLoading && 'animate-pulse dark:bg-slate-500 bg-slate-300 rounded-md'} px-[2px] py-[3px]`}>
       <AnimatePresence>
        <motion.img
         className={`object-contain md:w-full h-[250px] md:h-[450px] w-full ${isLoading && 'invisible'} visible`}
         key={count}
         src={image[count]}
         initial={{ x: 100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         alt=""/>
       </AnimatePresence>
      </motion.div>
      <motfit
      initial={{ opacity: 0, scale: 0.5, }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
  className={`${isLoading && 'animate-pulse'} animate-none w-full md:w-[70%] h-[250px] md:h-[450px] border-purple-500 flex flex-col justify-center md:items-start items-center space-y-2`}>
        <span className={`text-2xl md:text-4xl md:text-left text-center font-medium font-poppins  ${isLoading && 'dark:bg-slate-500 bg-slate-300 rounded-md w-fit h-8 text-transparent'} dark:text-[#edf2f4] text-[#14213d]`}>We would love to </span>
        <span className={`text-2xl md:text-4xl md:text-left text-center font-medium font-poppins  ${isLoading && 'dark:bg-slate-500 bg-slate-300 rounded-md w-fit h-8 text-transparent'} dark:text-[#edf2f4] text-[#14213d]`}>visit with you by phone</span>
        <span className={`text-2xl md:text-4xl md:text-left text-center font-medium font-poppins  ${isLoading && 'dark:bg-slate-500 bg-slate-300 rounded-md w-fit h-8 text-transparent'} dark:text-[#edf2f4] text-[#14213d]`}> or eye to eye and discourse </span>
        <span className={`text-sm md:text-base md:text-left text-center font-medium font-poppins  ${isLoading && 'dark:bg-slate-500 bg-slate-300 rounded-md w-fit h-8 text-transparent'} dark:text-[#edf2f4] text-[#14213d]`}>With Pleasure about your wedding, event,</span>
        <span className={`text-sm md:text-base md:text-left text-center font-medium font-poppins  ${isLoading && 'dark:bg-slate-500 bg-slate-300 rounded-md w-fit h-8 text-transparent'} dark:text-[#edf2f4] text-[#14213d]`}>picture session, or video adventure.</span>
        <motion.button
        whileTap={{ scale: 0.7 }}
        className={` px-3 py-1 rounded-md font-medium text-base md:text-lg ${isLoading && 'dark:bg-slate-500 bg-slate-300 rounded-md w-[165px] h-9 text-transparent'} dark:text-[#14213d] dark:bg-[#edf2f4] bg-[#14213d] text-[#edf2f4] relative before:absolute before:top-0 before:left-0 before:w-0 before:overflow-hidden hover:before:w-full before:transition-all before:grid before:place-items-center before:h-full before:bg-[#14213d] dark:before:bg-[#edf2f4] overflow-hidden before:content-["🚀"]`}>Let's Go</motion.button>
      </motfit>
    </div>
  )
}
