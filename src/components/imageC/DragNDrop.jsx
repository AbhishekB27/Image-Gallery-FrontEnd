import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import storage from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
} from "@fortawesome/free-regular-svg-icons";
import useUpload from "./hooks/useUpload";
import { faOtter } from "@fortawesome/free-solid-svg-icons";
import { info } from "autoprefixer";

const DragNDrop = () => {
   const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loader);
  const [category, setCategory] = useState("Nature");
  const { user } = useSelector((state) => state.auth);
  const [files, setFiles] = useState({});
  // const [file, setFile] = useState(null);
  // const [error, setError] = useState(null);
  const handleChange = (e) => {
      let selectedFile = e.target.files;
      console.log(selectedFile)
     
      setFiles({files:selectedFile,category:category,user:user._id})
    //   if (selectedFile) {
    //       if (types.includes(selectedFile.type)) {
    //           // setError(null);
    //           setImage(selectedFile);
    //       } else {
    //           setImage([]);
    //           // setError("Please select an image file (png or jpg)");
    //       }
    //   }
  };

  // Getting the progress and url from the hook
  const { iProgress,data } = useUpload(files);
  console.log(iProgress , data)
  return (
      <div className="App">
          <form>
              <label>
                  <input type="file" onChange={handleChange}
                             multiple
                             id="dragNdrop"
                  />
              </label>
          </form>

          {/* {error && <p>{error}</p>} */}
      </div>
      )
  // const [images, setImage] = useState([]);
  // const [isLoadingI, setLoading] = useState(false);
  // const [category, setCategory] = useState("");
  // const [data, setData] = useState([]);
  // const [iProgress, setIProgress] = useState([]);
  // const [uploaded, setUploaded] = useState(false);
  // const [count, setCount] = useState(0);
  // const dispatch = useDispatch();
  // const { isLoading } = useSelector((state) => state.loader);
  // const { user } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if(uploaded){
  //     if(images.length === data.length){
  //       console.log(data);
  //       // dispatch(setImages(data))
  //       console.log(images);
  //     }
  //     else{console.log("I am not equal")}
  //   }
  //   else{
  //     console.log("Not Equal")
  //   }
  // }, [data])
  
  // const handleFile = (event) => {
  //   const files = event.target.files
  //   console.log(files)
  //   // event.target.files.map(item => console.log(item))
  //   // console.log(files[0])
  //   setImage([]);
  //   setData([]);
  //   setIProgress([]);
  //   setCategory("");
  //   setLoading(false)
  //   for (let i = 0; i < files.length; i++) {
  //     const tURL = URL.createObjectURL(files[i]);
  //     // setTempUrl((prev) => [...prev, tURL]);
  //     // console.log(Math.round(event.target.files[i].size/1024) > 1024 ? `${Math.round(event.target.files[i].size/1024)} MB` : `${Math.round(event.target.files[i].size/1024)} KB`)
  //     const newImage = files[i];
  //     newImage["id"] = uuidv4();
  //     setIProgress((prev) => [...prev, { iURL: tURL,iName:files[i].name,progress: 0 }]);
  //     setImage((prev) => [...prev, newImage]);
  //     console.log(iProgress)
  //   }
  //   console.log(images);
  //   // handleChange()
  // };
  // const dragOver = (event) => {
  //   event.preventDefault();
  // };
  // const dragEnter = (event) => {
  //   event.preventDefault();
  // };
  // const dragLeave = (event) => {
  //   event.preventDefault();
  // };
  // const fileDrop = (event) => {
  //   event.preventDefault();
  //   const files = event.dataTransfer.files;
  //   console.log(files);
  //   if (count > 0) {
  //     setImage([]);
  //     setData([]);
  //     setIProgress([]);
  //     setCategory("");
  //   }
  //   for (let i = 0; i < event.dataTransfer.files.length; i++) {
  //     const tURL = URL.createObjectURL(event.dataTransfer.files[i]);
  //     // console.log(Math.round(event.target.files[i].size/1024) > 1024 ? `${Math.round(event.target.files[i].size/1024)} MB` : `${Math.round(event.target.files[i].size/1024)} KB`)
  //     setIProgress((prev) => [...prev, { iURL: tURL, progress: 0 }]);
  //     const newImage = event.dataTransfer.files[i];
  //     newImage["id"] = uuidv4();
  //     setImage((prev) => [...prev, newImage]);
  //   }
  // };
  // const uploadData = () => {
  //   console.log(category)
  //   console.log(data);
  //   console.log(iProgress)
  //   console.log(count)
  //   console.log(images.length)
  // };
  // console.log(isLoadingI + isLoading)
  // const handleCate = (event) => {
  //   setCategory(event.target.value);
  // };
  // const handleChange = async () => {
  //   console.log(images);
  //   console.log(iProgress)
  //   console.log(count)
  //   if (images.length === 0) {
  //     // alert("Please select image first");
  //     return toast.info("Please select image first", {
  //       position: "top-center",
  //     });
  //   } else {
  //     if (category === "") {
  //       return toast.info("Please Add Category first", {
  //         position: "top-center",
  //       });
  //     }
  //     if(images.length > 4){
  //       const promises = [];
  //     images.filter((item,index)=> index <=4).map((image, i) => {
  //       setLoading(true);
  //       const storageRef = ref(storage, `images/${image.name}`);
  //       const uploadTask = uploadBytesResumable(storageRef, image);
  //       // Pause the upload
  //       // uploadTask.pause();

  //       // Resume the upload
  //       // uploadTask.resume();

  //       // Cancel the upload
  //       // uploadTask.cancel();
  //       promises.push(uploadTask);
  //       uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           const prog = Math.round(
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //           );
  //           setIProgress((prev) =>
  //             prev.map((img, j) =>
  //               i === j ? {...img, iURL: img.iURL, progress: prog } : img
  //             )
  //           );
  //           // i === 0 ? setIProgress((prev)=> [...prev, {url:prog}])
  //           // setIProgress(`${image.name}: ${index}: ` + prog);
  //         },
  //         (error) => {
  //           console.log(error);
  //           switch (error.code) {
  //             case "storage/unauthorized":
  //               // User doesn't have permission to access the object
  //               toast.info("Does not have permission to access the object", {
  //                 position: "top-center",
  //               });
  //               break;
  //             case "storage/canceled":
  //               // User canceled the upload
  //               alert("canceled the upload");
  //               break;
  //             case "storage/unknown":
  //               // Unknown error occurred, inspect error.serverResponse
  //               toast.info("Server Error", { position: "top-center" });
  //               // alert("Server Error")
  //               break;
  //           }
  //         },
  //         async () => {
  //            getDownloadURL(uploadTask.snapshot.ref)
  //             .then((downloadURL) => {
  //               // setUrl((prev) => [...prev, downloadURL]);
  //               setData((prev) => {
  //                 return [
  //                   ...prev,
  //                   {
  //                     imageName: image.name.split('.')[0].toUpperCase(),
  //                     imageUrl: downloadURL,
  //                     category: category,
  //                     user: user._id,
  //                   },
  //                 ];
  //               });
  //             })
  //             .catch((error) => {
  //               console.log(error);
  //               toast.info(error.message, { position: "top-center" });
  //             });
  //         }
  //       );
  //     });
  //     Promise.all(promises)
  //       .then(() => {
  //         alert("All Images Uploaded Successfully");
  //         setLoading(false);
  //         setUploaded(true)
  //         // setImage([]);
  //         // setCategory("");
  //         setCount((prev) => prev + 1);
  //         // dispatch(setData(data));
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //         toast.info(error.message, { position: "top-center" });
  //       });  
  //     }
  //     else{
  //       toast.info("Enter Atleast 5 Images", {position: "top-center"})
  //     }
      
  //   }
  // };
  //   return (
  //   <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-2 relative bg-slate-500 dark:bg-slate-400 h-auto  lg:h-[36rem]">
  //     {/* <div className="overflow-auto flex border-2 w-full"> */}
  //     <div className="flex relative flex-col gap-2 px-2 py-1">
  //       <div className="relative hover:bg-white/40 rounded-sm border-2 border-dashed bg-white/30 h-[10rem] lg:h-[20rem]">
  //         <label
  //           onDragOver={dragOver}
  //           onDragEnter={dragEnter}
  //           onDragLeave={dragLeave}
  //           onDrop={fileDrop}
  //           className={`absolute z-10 grid h-full w-full ${
  //             count || isLoadingI > 0 ? 
  //             "cursor-not-allowed " : "cursor-pointer "
  //           } place-items-center bg-transparent`}
  //           for="dragNdrop"
  //         >
  //           <div className="grid grid-cols-2 lg:grid-cols-1 place-items-center">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke-width="0.6"
  //               stroke="#e5e5e5"
  //               className="h-[4rem] w-[4rem] md:h-[6rem] lg:h-[10rem] md:w-[6rem] lg:w-[10rem]"
  //             >
  //               <path
  //                 className=""
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
  //               />
  //             </svg>
  //             <div className="grid place-items-center">
  //             <span className="text-lg lg:text-2xl text-center md:font-bold  gradient-text2 font-medium">
  //               Drag And Drop Image Up to 5 Here
  //             </span>
  //             <span className="text-base text-center md:text-justify gradient-text2 font-medium">
  //               Or
  //             </span>
  //             <span className="text-base text-center md:text-justify gradient-text2 font-medium">
  //               Click to Browse Image
  //             </span>
  //             </div>
  //           </div>
  //         </label>
  //         <input
  //           // disabled={isLoadingI === true ? true : false}
  //           disabled={count > 0 || isLoadingI ? true : false}
  //           onChange={handleFile}
  //           accept="image/*"
  //           multiple
  //           className="hidden"
  //           type="file"
  //           name=""
  //           id="dragNdrop"
  //         />
  //       </div>
  //       <div className="flex w-full justify-between rounded-md bg-slate-200/30">
  //         <input
  //           onChange={handleCate}
  //           className={`rounded-md ${count || isLoadingI > 0 ? "cursor-not-allowed" : " cursor-auto"} w-full focus:ring-4 ring-slate-600 bg-transparent px-4 py-2 text-base text-white outline-none placeholder:text-gray-50`}
  //           placeholder="Add Category"
  //           type="text"
  //           name=""
  //           id=""
  //           value={category}
  //           disabled={count > 0 ? true : false}
  //         />{" "}
  //       </div>
  //       <div className="flex gap-3 md:justify-end justify-between items-center w-full lg:absolute lg:bottom-0 lg:px-4 lg:py-1">
  //         <button
  //           onClick={handleChange}
  //           className={`px-3 py-2 hover:bg-slate-600 bg-slate-800 rounded-md w-[100px] h-[40px]
  //           ${count || isLoadingI > 0 ? "cursor-not-allowed" : " cursor-pointer"} `}
  //           disabled={count > 0 ? true : false}
  //         >
  //           {isLoading ? (
  //             <div className="scaling-dots place-items-center">
  //               <div></div>
  //               <div></div>
  //               <div></div>
  //               <div></div>
  //               <div></div>
  //             </div>
  //           ) : (
  //             "Upload"
  //           )}
  //         </button>
  //         <button  onClick={uploadData} className=" grid place-items-center hover:bg-slate-600 bg-slate-800 rounded-md w-[100px] h-[40px] ">
  //           Cancel
  //         </button>
  //       </div>
  //     </div>
  //     <div
  //       className={`border-2 border-dashed md:min-h-[20rem] min-h-[21.5rem] lg:h-auto w-full ${
  //         images.length === 0
  //           ? "col-span-2 flex justify-center items-center"
  //           : " grid gap-[6px] p-2 place-items-center place-content-start col-span-2 grid-cols-1 md:grid-cols-3 h-auto lg:overflow-auto md:gap-2"
  //       }`}
  //     >
  //       {iProgress.length > 0 ? (
  //         iProgress.filter((item,index) => index <=4).map((image, index) => {
  //           return (
  //             <div
  //               key={index}
  //               className="flex group relative cursor-pointer w-full h-fit items-center justify-start gap-3 overflow-hidden rounded-md bg-white py-[6px] text-base md:relative md:rounded-md md:px-0 md:py-0"
  //             >
  //               <span className="hidden lg:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gradient-text2 text-lg font-medium"> {image.iName ? image.iName.split('')[0].toUpperCase() : "Hello Folks"} </span>
  //               <div
  //                 style={{ width: `${image.progress}%` }}
  //                 className={`absolute grid place-items-center lg:hover:bg-slate-400 z-20 font-medium text-xl text-white overflow-hidden h-full bg-purple-400/40`}
  //               >
  //                 {" "}
  //                 {image.progress === 100
  //                   ? "Completed"
  //                   : `${image.progress}%`}{" "}
  //               </div>
  //               <img
  //               loading="lazy"
  //                 className="peer lg:origin-top-right lg:z-10 group-hover:rotate-[-75deg] lg:hover:rotate-[-75deg] lg:transition-all rounded-md w-[3rem] h-[3rem] mx-4 md:mx-0 md:h-[9rem] lg:h-[17.1rem] md:w-full border-2 object-cover"
  //                 // src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1"
  //                 src={
  //                   image.iURL ||
  //                   "https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1"
  //                 }
  //                 alt="img"
  //               />
  //             </div>
  //           );
  //         })
  //       ) : (
  //         <div className="flex justify-center items-center flex-col">
  //           <FontAwesomeIcon
  //             className="lg:w-[10rem] md:h-[6rem] lg:h-[10rem] md:w-[6rem]"
  //             icon={faImage}
  //           />
  //           <span className="lg:text-lg md:text-base font-medium">
  //             No Images
  //           </span>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
};

export default DragNDrop;
