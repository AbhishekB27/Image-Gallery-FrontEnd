import {
  faCircleXmark,
  faEdit,
  faImage,
} from "@fortawesome/free-regular-svg-icons";
import { faDatabase, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import avtar from "./UserAvtar.jpg";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../firebase/index";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { updateUser } from "../../actions/auth";
import { Loader } from "../Loader";

export const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { user,token } = useSelector((state) => state.auth);
  const { images } = useSelector((state) => state.images);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // console.log(token)
    if(!token){
      navigate('/login')
    }
  }, [token])

  console.log(user.avtar)
  const {isLoading} = useSelector((state) => state.loader)
  const [url, setUrl] = useState({
    avtar: null,
  });
  console.log(url);
  useEffect(() => {
    console.log(url.avtar === null);
    if (url.avtar !== null) {
      console.log(url.avtar);
      // if (url.avtar !== null && url.avtar !== user.avtar||''||null) {
      //   let imgUrl = user.avtar;
      //   console.log(imgUrl);
      //   const dessertRef = ref(storage, imgUrl);
      //   // console.log(deleteObject(dessertRef).exists())
      //   deleteObject(dessertRef)
      //     .then(() => {
      //       console.log("File Delete Successfully");
      //       setUrl({
      //         avtar:null
      //       })
      //     })
      //     .catch((err) => {
      //       alert(err);
      //     });
      // }
      console.log(url);
      console.log(url.avtar === user.avtar);
      if (url.avtar !== user.avtar) {
        console.log("updated");
        dispatch(updateUser(url));
      }
    } else {
      console.log("empty avtar file");
    }
  }, [url]);
  const uploadFile = (data) => {
    try {
      data.map((item) => {
        console.log(item.name);
        const storageRef = ref(storage, `images/${item.name}`);
        const uploadTask = uploadBytesResumable(storageRef, item);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            // setProgress(progress); for show progress
          },
          (error) => {
            alert(error);
          },
          async () => {
            const urlData = await getDownloadURL(uploadTask.snapshot.ref);
            console.log(urlData);
            // setUrl([])
            setUrl({
              avtar: urlData,
              id: user._id,
            });
            // console.log(url)
          }
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFile = async (event) => {
    console.log(event.target.files);
    const file = [...event.target.files];
    console.log(file);
    if (file.length != 0) {
      uploadFile(file);
    }
    console.log(url);
    console.log(user.avtar)
  };
console.log(url.avtar === null && user.avtar === null)
console.log(user.avtar)
  return (
    <div className="w-full flex flex-col justify-center items-start">
      <div className="w-full flex justify-center items-center">
        <div className="container flex flex-col border-red-500 py-8 md:flex-row justify-center gap-12 items-center">
          <div className="relative w-[8.50rem] md:w-[9.50rem] h-[8.50rem] md:h-[9.50rem] shadow-lg shadow-slate-500 dark:shadow-slate-200 rounded-full">
           {
            isLoading && <Loader/> 
           }
            <img
            className="w-full hover:grayscale hover:cursor-pointer h-full object-cover rounded-full"
            src={url.avtar === null && user.avtar === null || user.avtar === '' ? avtar : user.avtar}
            alt=""
          />
            <abbr title="Change Profile">
            <motion.button
              whileTap={{ scale: 0.7 }}
              className="absolute outline-none grid overflow-hidden place-items-center right-[10px] bottom-0 text-2xl bg-yellow-300 border-[3px] border-white rounded-full w-[35px] h-[35px]"
            >
              <input
                accept="image/*"
                multiple
                onChange={handleFile}
                type="file"
                name="images"
                id="file"
                className="absolute h-full w-full opacity-0"
              />
              <label
                className="z-10 cursor-pointer grid place-items-center"
                htmlFor="file"
              >
                {" "}
                <FontAwesomeIcon icon={faPlus} />{" "}
              </label>
            </motion.button>
            </abbr>
          </div>
          <div className="space-y-2 flex flex-col justify-center md:items-start items-center">
            <div className="flex md:text-5xl text-xl font-medium justify-center md:justify-start items-center">
              {user.firstName + " " + user.lastName}
            </div>
            <div className="md:text-lg md:font-medium">
              Download free, beautiful high-quality photos curated by{" "}
              {user.firstName}
            </div>
            <div className="flex text-lg font-normal justify-center md:justify-start items-center gap-1">
              <span className="font-medium">Designation: </span>
              {user.designation === null ? (
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCircleXmark} /> None{" "}
                </span>
              ) : (
                <span>
                  {user.designation + " "}
                  <a
                    className="hover:underline text-blue-500 md:font-medium"
                    href="#"
                  >
                    Join Us
                  </a>
                </span>
              )}
            </div>
            <Link to={`/account/${user._id}`}>
              <motion.button
                whileTap={{ scale: 0.7 }}
                className="px-3 md:font-medium py-1 border border-[#14213d] dark:border-[#edf2f4] rounded"
              >
                {" "}
                <FontAwesomeIcon icon={faEdit} /> Edit Profile{" "}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-start border-b-2 pb-1 items-start gap-5 md:text-xl">
          <Link to="/userProfile">
            <button className="outline-none hover:cursor-pointer bg-bottom py-3 px-2 bg-gradient-to-r from-black to-black dark:from-white dark:to-white bg-[length:0%_3px] hover:bg-[length:100%_3px] bg-no-repeat transition-all">
              {" "}
              <FontAwesomeIcon icon={faImage} /> Photos {images.filter(item => item.user._id === user._id).length}
            </button>
          </Link>
          <Link to="/userProfile/collections">
            <button className="outline-none hover:cursor-pointer bg-bottom py-3 px-2 bg-gradient-to-r from-black to-black dark:from-white dark:to-white bg-[length:0%_3px] hover:bg-[length:100%_3px] bg-no-repeat transition-all">
              {" "}
              <FontAwesomeIcon icon={faDatabase} /> Collection 0
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center pt-2 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
