import { faCheck, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { storage } from "../../firebase/index";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useEffect } from "react";
import CloudStorage from "./CloudStorage3D.png";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { info } from "autoprefixer";

export const DragNDrop = ({ setImageData }) => {
  const [file, setFiles] = useState([]);
  const [url, setUrl] = useState([]);
  const [prog, setProgress] = useState(0);
  const [count, setCount] = useState(0)
  console.log("count " + count)
  console.log("progress: " + prog)


  useEffect(() => {
    console.log("progress: " + prog)

    setImageData((prev) => {
      // console.log(prev);
      return { ...prev, imgUrls: url };
    });
  }, [url]);
  useEffect(() => {
    console.log("progress: " + prog)
  }, [prog]);

  const uploadFile = (data) => {
    try { 
      data.map((item) => {
        // console.log(item);
        const storageRef = ref(storage, `images/${item.name}`);
        const uploadTask = uploadBytesResumable(storageRef, item);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            let progress =parseInt((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            if(progress === 100){
              setCount(prev => {return prev + 1})
            }
            setProgress(count * 20)
            console.log(count)
            console.log("pro: " + progress);
            // setProgress(prog);
            // console.log(prog)
          },
          (error) => {
            alert(error);
          },
          async () => {
            const urlData = await getDownloadURL(uploadTask.snapshot.ref);
            // console.log(urlData);
            // setUrl([])
            setUrl((prev) => {
              return [...prev, urlData]; // This is useful for multiple images
            });

            //   console.log(url)
          }
        );
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const dragOver = (event) => {
    event.preventDefault();
    // console.log(event.target)
  };
  const dragEnter = (event) => {
    event.preventDefault();
    // console.log(event.target)
  };
  const dragLeave = (event) => {
    event.preventDefault();
    // console.log(event.target)
  };
  const fileDrop = (event) => {
    event.preventDefault();
    const files = [...event.dataTransfer.files];
    // const name = event.target.name;
    // const value = event.dataTransfer.files;
    // setFiles([])
    setFiles((prev) => {
      return [...prev, ...files];
    });
    // console.log(event.target.files)
    if(files.length > 4){
      uploadFile(files);
    }else{
      toast.info('Upload Atleast 5 Images 😊',{position:'top-center'})
    }
    // console.log(file[0].name.split('.')[0].slice(0,10) + "."+file[1].name.split('.')[1])
  };

  const handleFile = async (event) => {
    const files = [...event.target.files];
    // console.log(files)
    setFiles([]);
    setUrl([]);
    setFiles((prev) => {
      return [...prev, ...files];
    });
    // console.log(event.target.files)
    if(files.length > 4){
      uploadFile(files);
    }else{
      toast.info('Upload Atleast 5 Images 😊',{position:'top-center'})
    }
  };
  return (
    <div className="flex flex-col w-full md:flex-col gap-2 justify-center items-center">
      <div
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        className="relative w-[80%] h-[200px] md:h-[355px] flex flex-col justify-center items-center bg-blue-300/70 rounded-md border-2 border-white border-dashed dark:border-[#edf2f4]"
      >
        <input
          accept="image/*"
          multiple
          onChange={handleFile}
          type="file"
          name="images"
          id="file"
          className="absolute cursor-pointer h-full w-full opacity-0"
        />
        <img
          className="w-[320px] hidden md:flex animate-bounce h-[220px]"
          src={CloudStorage}
          alt=""
        />
        <span className="text-lg md:text-2xl text-center md:text-justify md:font-bold  gradient-text2 font-medium">
          Drag And Drop Image Up to 5 Here
        </span>
        <span className="text-base text-center md:text-justify gradient-text2 font-medium">
          Or
        </span>
        <span className="text-base text-center md:text-justify gradient-text2 font-medium">
          Click to Browse Image
        </span>
      </div>
      <div className="w-[80%] md:h-[100px] border-2 dark:border-[#edf2f4] p-2 rounded-md">
        <span className="px-3 font-medium">Images:</span>
        <div className="relative flex flex-col gap-1 justify-center items-center rounded-md w-full max-h-[36px] overflow-hidden border-2  border-green-600">
          <span className="float-right z-10">{count*20 === 100 ? 'Completed' : count*20 + '%' }</span>
          <div className={`absolute self-start w-[${count*20}%] h-full overflow-x-hidden transition-all bg-green-400 text-center`}></div>
        </div>
        <span className="text-xs pl-[10px]">Total: {url.length} </span>
      </div>
    </div>
  );
};
