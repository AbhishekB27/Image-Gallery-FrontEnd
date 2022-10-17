import React, { useState } from "react";
import {
  faImage,
  faMoon,
  faSun,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCameraAlt, faUpload, faUsers } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { Hamburger } from "./Hamburger";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { ProfileLogout } from "./ProfileLogout";
import { UploadImg } from "../imageC/UplaodImg";

export const Header = ({ theme, setTheme }) => {
  const { token,user,authLoaded} =useSelector(state=> state.auth)
  const {isLoading} = useSelector(state=>state.loader)
    const [toggle, setToggle] = useState(false)
    const [lModal, setlModal] = useState(false)
    const [uModal, setUmodal] = useState(false)
// console.log("lModal: " + lModal)
    const handleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleProfile = (event)=>{
    const name = event.target.name
    if(uModal){
    setUmodal(!uModal)
    }
    setlModal(!lModal)

  }
  const handleLogOut = (event)=>{
    const name = event.target.name
    if(lModal){
    setlModal(!lModal)
    }
    setUmodal(!uModal)
  }
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.5, }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="border-yellow-500 w-full absolute top-0"
    >
      <AnimatePresence>
      {token && lModal ? <ProfileLogout lModal={lModal} setlModal={setlModal} /> : ""}
      {token && uModal ? <UploadImg uModal={uModal} setUmodal={setUmodal} /> : ""}
      </AnimatePresence>
      <div className="text-base flex  md:justify-between md:gap-0 gap-3 justify-center items-center px-3 py-2 flex-wrap dark:bg-black/25 bg-black/5">
        <div className="">
          <div className="text-lg">
            {" "}
            <FontAwesomeIcon icon={faCameraAlt} />{" "}
            <span className="text-base font-poppins">
              Show Your Photography Skills With Us.
            </span>{" "}
          </div>
        </div>
        <div className="flex justify-center items-center md:gap-4 gap-3">
          <div className="flex justify-self-center items-center md:gap-4 gap-3">
            {!token ? (
              <>
                {" "}
                <motion.button
                whileHover={{scale:1.1}}
                whileTap={{scale:0.7}}
                className="md:px-5 px-3 py-1 rounded-md dark:bg-[#edf2f4] bg-[#14213d] dark:text-[#14213d] text-[#edf2f4] font-medium">
                  <Link to='/login'> LOGIN </Link>
                </motion.button>
                <motion.button
                whileHover={{scale:1.1}}
                whileTap={{scale:0.7}}
                className="md:px-5 px-3 py-1 rounded-md dark:bg-[#edf2f4] bg-[#14213d] dark:text-[#14213d] text-[#edf2f4] font-medium">
                  <Link to='/signup'> SIGNUP </Link>
                </motion.button>{" "}
              </>
            ) : (
              <div className="flex gap-2">
                <motion.button
              onClick={handleProfile}
              whileTap={{scale:0.7}}
              name='logOut'
              className={` md:px-5 px-3 py-1 flex gap-2 justify-between items-center text-sm md:text-lg rounded-md ${isLoading ? 'animate-pulse dark:bg-slate-500 bg-slate-300 rounded-md text-transparent' : "dark:bg-[#edf2f4] bg-[#14213d] dark:text-[#14213d] text-[#edf2f4] font-medium "} `}>
                <span className={`text-pink-500 ${isLoading && "invisible" }`}>
                {user.email ? user.firstName[0].toUpperCase()+user.lastName[0].toUpperCase(): ''} <FontAwesomeIcon className={`text-blue-400`} icon={faUserCircle} />{" "}
                </span>{" "}
                
              </motion.button>
              <motion.button
              onClick={handleLogOut}
              whileTap={{scale:0.7}}
              name='upload'
              className={`md:px-5 px-3 py-1 flex gap-2 justify-between items-center text-sm md:text-lg rounded-md ${isLoading ? 'animate-pulse dark:bg-slate-500 bg-slate-300 rounded-md text-transparent' : "dark:bg-[#edf2f4] bg-[#14213d] dark:text-[#14213d] text-[#edf2f4] font-medium "}`}>
                Upload
                <FontAwesomeIcon className={`${isLoading && "invisible" }`} icon={faUpload}/>
              </motion.button>
              </div>
            )}{" "}
          </div>
          <div className="flex justify-center text-sm md:text-lg items-center gap-2 font-ubuntu dark:border-[#edf2f4] border-[#14213d] border-2 px-2 rounded-md">
            {theme === "dark" ? (
              <span className="scale-110 text-cyan-500 font-semibold">
                Dark
              </span>
            ) : (
              <span className="scale-90">Dark</span>
            )}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              onClick={handleMode}
              className="text-sm md:text-2xl outline-none"
            >
              {theme === "dark" ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )}
            </motion.button>
            {theme === "light" ? (
              <span className="scale-110 text-cyan-500 font-semibold">
                Light
              </span>
            ) : (
              <span className="scale-90 ">Light</span>
            )}
          </div>
        </div>
      </div>

      <div className="relative md:static md:flex md:flex-row flex-col justify-between items-center">
        <div className="w-full flex justify-between items-center px-2">
          <div className="flex justify-start w-fit items-center gap-3 cursor-pointer">
          {/* <img className="h-[40px] w-[45px]" src={logo} alt="" /> */}
          <FontAwesomeIcon className="md:h-[40px] h-[30px] md:w-[45px] w-[35px]" icon={faImage}/>
          <span className="md:text-2xl text-lg font-poppins font-bold logo gradient-text">Amaze Image</span>
          </div>
          <Hamburger setToggle={setToggle}/>
        </div>
        <ol
        className={`${toggle === true ? 'h-[100vh] opacity-100 transition-all duration-300 ease-linear' : 'h-[0] opacity-0 transition-all duration-300 ease-linear'} md:text-current text-white font-medium absolute md:static w-full  z-50  md:translate-y-0 md:opacity-100 md:flex md:flex-row md:justify-end md:space-y-0 md:h-auto md:bg-transparent flex flex-col justify-center items-center space-y-4 bg-black/95 border-transparent border-2`}>
          <li className="md:w-[100px] md:text-center   text-center cursor-pointer hover:dark:border-b-[#edf2f4] hover:border-b-[#14213d] border-2 border-transparent py-2">
          <Link to='/'> HOME </Link>
          </li>
          <li className="md:w-[100px] md:text-center   text-center cursor-pointer hover:dark:border-b-[#edf2f4] hover:border-b-[#14213d] border-2 border-transparent py-2">
          <Link> CATEGORIES </Link>
          </li>
          <li className="md:w-[100px] md:text-center   text-center cursor-pointer hover:dark:border-b-[#edf2f4] hover:border-b-[#14213d] border-2 border-transparent py-2">
          <Link to='/contactUs'> CONTACT </Link>
          </li>
          <li className="md:w-[100px] md:text-center   text-center cursor-pointer hover:dark:border-b-[#edf2f4] hover:border-b-[#14213d] border-2 border-transparent py-2">
          <Link to='/aboutUs'> ABOUT US </Link>
          </li>
        </ol>
      </div>
    </motion.header>
  );
};
