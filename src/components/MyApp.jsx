import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { HomePage } from "./home/HomePage";
import { Route, Routes } from "react-router-dom";
// import { Contact } from "./layout/Contact";
import { SignUp } from "./auth/SignUp";
import { Login } from "./auth/Login";
import { Profile } from "./user/Profile";
import { Photos } from "./user/Photos";
import { Collections } from "./user/Collections";
import { EditProfile } from "./user/EditProfile";
import { BigImage } from "./imageC/BigImage";
import { AddCollection } from "./imageC/AddCollection";
import Contact from "./Contact";
import Category from "./Category";
import { AboutUs } from "./AboutUs";


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
  // alert(window.screen.width)

  return (
    <div className="relative dark:bg-[#14213d] dark:text-[#edf2f4] min-h-screen h-auto bg-[#edf2f4] text-[#14213d] flex flex-col justify-start pt-[150px] pb-[80px] md:pt-[95px] items-center px-2">
      <Header theme={theme} setTheme={setTheme} />
      <div className="w-full grid place-items-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userProfile" element={<Profile />}>
            <Route path="" element={<Photos/>} />
            <Route path="collections" element={<Collections/>} />
          </Route>
          <Route path="/account/:userId" element={<EditProfile />} />
          <Route path="/bigImage/:imgId" element={<BigImage />} />
          <Route path="userProfile/bigImage/:imgId" element={<BigImage />} />
          <Route path="addToCollection/:imgId" element={<AddCollection />} />
          <Route path="category/:catName" element={<Category />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};
