import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import {Header} from './layout/Header'
import {Footer} from './layout/Footer'
import { HomePage } from './home/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Contact } from './layout/Contact';
import { SignUp } from './auth/SignUp';
import { Login } from './auth/Login';


export const MyApp = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      // console.log("if"+ theme)
    } else {
      document.documentElement.classList.remove("dark");
      // console.log("else"+theme)
    }
  }, [theme]);

  return (
    <div className='relative dark:bg-[#14213d] dark:text-[#edf2f4] min-h-screen h-auto bg-[#edf2f4] text-[#14213d] flex flex-col justify-center pt-[150px] pb-[80px] md:pt-[95px] items-center px-2'>
            <Header theme={theme} setTheme={setTheme} />
            <div className='container grid place-items-center'>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/contactUs' element={<Contact/>} />
              <Route path='/signUp' element={<SignUp/>} />
              <Route path='/login' element={<Login/>} />
            </Routes>
            </div>
            <Footer/>
      <ToastContainer/>
    </div>
  )
}
