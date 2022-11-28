import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import storage from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import useUpload from "./hooks/useUpload";
import { setImages } from "../../actions/usersData";

const DragNDrop = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loader);
  const [category, setCategory] = useState('');
  const { user } = useSelector((state) => state.auth);
  const [files, setFiles] = useState([]);
  const [count, setCount] = useState(0);
  const { iProgress, isLoadingI, data, uploaded } = useUpload(files);
  console.log(files)
  const handleFile = (e) => {
    let selectedFile = e.target.files;
        setFiles({ files: selectedFile, category: category, user: user._id });
    // if(selectedFile.length >= 5){
    //   if(category === ''){
    //     toast.info("Please add a category first",{position:'top-center'})
    //   }
    //   else{
    //     setFiles({ files: selectedFile, category: category, user: user._id });
    //   }
    // }
    // else{
    //   toast.info("Select atleast 5 images...",{position:'top-center'})
    // }
  };
  
  const dragOver = (event) => {
    event.preventDefault();
  };
  const dragEnter = (event) => {
    event.preventDefault();
  };
  const dragLeave = (event) => {
    event.preventDefault();
  };
  const fileDrop = (event) => {
    let selectedFile = event.dataTransfer.files;
    if(category === ''){
      toast.info("Please add a category first")
    }
    else{
      setFiles({ files: selectedFile, category: category, user: user._id });
    }
  };
  const uploadData = () => {
    if(data.length > 0 && category !=''){
      data.map(item => item.category = category)
      console.log(data)
      setCount(prev => prev + 1)
      // dispatch(setImages(data))
    }
    else toast.info("Please Add Category First", {position:'top-center'})
  }
  // Getting the progress and url from the hook
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-2 relative bg-slate-500 dark:bg-slate-400 h-auto  lg:h-[36rem]">
      {/* <div className="overflow-auto flex border-2 w-full"> */}
      <div className="flex relative flex-col gap-2 px-2 py-1">
        <div className="relative hover:bg-white/40 rounded-sm border-2 border-dashed bg-white/30 h-[10rem] lg:h-[20rem]">
          <label
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
            className={`absolute z-10 grid h-full w-full ${
              uploaded || isLoadingI
                ? "cursor-not-allowed "
                : "cursor-pointer "
            } place-items-center bg-transparent`}
            for="dragNdrop"
          >
            <div className="grid grid-cols-2 lg:grid-cols-1 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="0.6"
                stroke="#e5e5e5"
                className="h-[4rem] w-[4rem] md:h-[6rem] lg:h-[10rem] md:w-[6rem] lg:w-[10rem]"
              >
                <path
                  className=""
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div className="grid place-items-center">
                <span className="text-lg lg:text-2xl text-center md:font-bold  gradient-text2 font-medium">
                  Drag And Drop Image Up to 5 Here
                </span>
                <span className="text-base text-center md:text-justify gradient-text2 font-medium">
                  Or
                </span>
                <span className="text-base text-center md:text-justify gradient-text2 font-medium">
                  Click to Browse Image
                </span>
              </div>
            </div>
          </label>
          <input
            // disabled={isLoadingI === true ? true : false}
            disabled={uploaded || isLoadingI ? true : false}
            onChange={handleFile}
            accept="image/*"
            multiple
            className="hidden"
            type="file"
            name=""
            id="dragNdrop"
          />
        </div>
        <div className="flex w-full justify-between rounded-md bg-slate-200/30">
          <input
            onChange={(event)=>{setCategory(event.target.value)}}
            className={`rounded-md ${
              isLoadingI || count > 0  ? "cursor-not-allowed" : " cursor-auto"
            } w-full focus:ring-4 ring-slate-600 bg-transparent px-4 py-2 text-base text-white outline-none placeholder:text-gray-50`}
            placeholder="Add Category"
            type="text"
            name=""
            id=""
            value={category}
            disabled={isLoading || count > 0 ? true : false}
          />{" "}
        </div>
        <div className="flex gap-3 md:justify-end justify-between items-center w-full lg:absolute lg:bottom-0 lg:px-4 lg:py-1">
          <button
            onClick={uploadData}
            className={`px-3 py-2 hover:bg-slate-600 bg-slate-800 rounded-md w-[100px] h-[40px]
            ${
               isLoadingI || isLoading || count > 0 ? "cursor-not-allowed" : " cursor-pointer"
            } `}
            disabled={ isLoadingI || isLoading || count > 0 ? true : false}
          >
            {isLoading ? (
              <div className="scaling-dots place-items-center">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              "Upload"
            )}
          </button>
          <button
            // onClick={uploadData}
            className=" grid place-items-center hover:bg-slate-600 bg-slate-800 rounded-md w-[100px] h-[40px] "
          >
            Cancel
          </button>
        </div>
      </div>
      <div
        className={`border-2 border-dashed md:min-h-[20rem] min-h-[21.5rem] lg:h-auto w-full ${
          iProgress.length === 0
            ? "col-span-2 flex justify-center items-center"
            : " grid gap-[6px] p-2 place-items-center place-content-start col-span-2 grid-cols-1 md:grid-cols-3 h-auto lg:overflow-auto md:gap-2"
        }`}
      >
        {iProgress.length > 0 ? (
          iProgress
            .filter((item, index) => index <= 4)
            .map((image, index) => {
              return (
                <div
                  key={index}
                  className="flex relative cursor-pointer w-full h-fit items-center justify-start gap-3 overflow-hidden rounded-md bg-white py-[6px] text-base md:relative md:rounded-md md:px-0 md:py-0"
                >
                  <span className="hidden lg:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gradient-text2 text-lg font-medium">
                    {" "}
                    {image.iName
                      ? image.iName.split("")[0].toUpperCase()
                      : "Hello Folks"}{" "}
                  </span>
                  <div
                    style={{ width: `${image.progress}%` }}
                    className={`absolute grid place-items-center z-20 font-medium text-xl text-white overflow-hidden h-full bg-purple-400/40`}
                  >
                    {" "}
                    {image.progress === 100
                      ? "Completed"
                      : `${image.progress}%`}{" "}
                  </div>
                  <img
                    loading="lazy"
                    className="peer lg:origin-top-right lg:z-10 rounded-md w-[3rem] h-[3rem] mx-4 md:mx-0 md:h-[9rem] lg:h-[17.1rem] md:w-full border-2 object-cover"
                    // src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1"
                    src={
                      image.iURL ||
                      "https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1"
                    }
                    alt="img"
                  />
                </div>
              );
            })
        ) : (
          <div className="flex justify-center items-center flex-col">
            <FontAwesomeIcon
              className="lg:w-[10rem] md:h-[6rem] lg:h-[10rem] md:w-[6rem]"
              icon={faImage}
            />
            <span className="lg:text-lg md:text-base font-medium">
              No Images
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default DragNDrop;
