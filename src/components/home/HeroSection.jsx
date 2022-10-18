import React, { useEffect, useMemo, useState } from 'react'
import ecom from './images/ecomm.png'
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from 'react-redux';
import image from './image';


export const HeroSection = () => {
  const {isLoading} = useSelector(state=>state.loader)
  
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
    <div className=' w-full h-auto md:min-h-[85vh] flex flex-col md:flex-row md:justify-center md:items-center border-lime-300'>
      <motion.div
      initial={{ opacity: 0, scale: 0.5, }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }} 
      className={`w-full overflow-hidden md:order-2 flex justify-center md:max-w-[45%rem] items-center h-[250px] md:h-[450px] ${isLoading && 'animate-pulse dark:bg-slate-500 bg-slate-300 rounded-md'} px-[2px] py-[3px]`}>
       <AnimatePresence>
        <motion.img
         className={`object-contain h-[250px] md:h-[450px]  w-full ${isLoading && 'invisible'} visible`}
         key={count}
         src={image[count]}
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{opacity: 0, scale:0.5}}
         transition={{ duration: 0.3 }}
         alt=""/>
       </AnimatePresence>
      </motion.div>
      <div
      initial={{ opacity: 0, scale: 0.5, }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
  className={`animate-none w-full md:max-w-[45%] h-[250px] md:h-[450px] border-purple-500 flex flex-col justify-center md:items-start items-center space-y-2`}>
        <span className={`text-2xl md:text-4xl md:text-left text-center font-medium font-poppins ${isLoading && 'animate-pulse dark:bg-slate-500 bg-slate-300 rounded-md w-fit h-8 dark:text-transparent text-transparent'} dark:text-[#edf2f4] text-[#14213d]`}>We would love to </span>
        <span className={`text-2xl md:text-4xl md:text-left text-center font-medium font-poppins ${isLoading && 'animate-pulse dark:bg-slate-500 bg-slate-300 rounded-md w-fit h-8 dark:text-transparent text-transparent'} dark:text-[#edf2f4] text-[#14213d]`}>connect with you by social </span>
        <span className={`text-2xl md:text-4xl md:text-left text-center font-medium font-poppins ${isLoading && 'animate-pulse dark:bg-slate-500 bg-slate-300 rounded-md w-fit h-8 dark:text-transparent text-transparent'} dark:text-[#edf2f4] text-[#14213d]`}>media unveil your skills  </span>
        <span className={`text-sm md:text-base md:text-left text-center font-medium font-poppins ${isLoading && 'animate-pulse dark:bg-slate-500 bg-slate-300 rounded-md w-fit h-8 dark:text-transparent text-transparent'} dark:text-[#edf2f4] text-[#14213d]`}>by clicking the photos of wedding, </span>
        <span className={`text-sm md:text-base md:text-left text-center font-medium font-poppins ${isLoading && 'animate-pulse dark:bg-slate-500 bg-slate-300 rounded-md w-fit h-8 dark:text-transparent text-transparent'} dark:text-[#edf2f4] text-[#14213d]`}>event,adventure with pleasure.</span>
        <motion.button
        whileTap={{ scale: 0.7 }}
        className={` px-3 py-1 ${isLoading ? 'animate-pulse dark:bg-slate-500 bg-slate-300 rounded-md w-[90px] h-9 dark:text-transparent text-transparent' : 'rounded-md font-medium text-base md:text-lg dark:text-[#14213d] dark:bg-[#edf2f4] bg-[#14213d] text-[#edf2f4] relative before:absolute before:top-0 before:left-0 before:w-0 before:overflow-hidden hover:before:w-full before:transition-all before:grid before:place-items-center before:h-full before:bg-[#14213d] dark:before:bg-[#edf2f4] overflow-hidden before:content-["🚀"]'} `}>Let's Go</motion.button>
      </div>
    </div>
  )
}
