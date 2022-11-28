import { info } from "autoprefixer";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import storage from "../../../firebase";
import { v4 as uuidv4 } from "uuid";

const useUpload = ({ files, category, user }) => {
  // console.log(category,user)
  const [isLoadingI, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [iProgress, setIProgress] = useState([]);
  const [uploaded, setUploaded] = useState(false);
  const types = ["image/png", "image/jpeg", "image/jpg"];

  useEffect(() => {
    const uploadImages = () => {
      const arr = Array.from(files || []);
      const promises = []
      // if(uploaded){
      //   Object.keys(files).length = 0
      //   setIProgress([])
      //   setLoading(false)
      //   setUploaded(false)
      //   setData([])
      //   setCount(0)
      // }
      if (arr.length > 0 && !uploaded) {
        for (let i = 0; i < arr.length; i++) {
          if (types.includes(arr[i].type)) {
            if (i === arr.length - 1) {
              for (let i = 0; i < files.length; i++) {
                const tURL = URL.createObjectURL(files[i]);
                // console.log(Math.round(event.target.files[i].size/1024) > 1024 ? `${Math.round(event.target.files[i].size/1024)} MB` : `${Math.round(event.target.files[i].size/1024)} KB`)
                const newImage = files[i];
                setIProgress((prev) => [
                  ...prev,
                  { iURL: tURL, iName: files[i].name, progress: 0 },
                ]);
              }
              arr
                .filter((item, index) => index <= 4)
                .map((image, i) => {
                  setLoading(true);
                  const storageRef = ref(storage, `images/${image.name}`);
                  const uploadTask = uploadBytesResumable(storageRef, image);
                  promises.push(uploadTask)
                  uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                      const prog = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                      );
                      setIProgress((prev) =>
                        prev.map((img, j) =>
                          i === j
                            ? { ...img, iURL: img.iURL, progress: prog }
                            : img
                        )
                      );
                    },
                    (error) => {
                      console.log(error);
                      switch (error.code) {
                        case "storage/unauthorized":
                          // User doesn't have permission to access the object
                          toast.info(
                            "Does not have permission to access the object",
                            {
                              position: "top-center",
                            }
                          );
                          break;
                        case "storage/canceled":
                          // User canceled the upload
                          toast.info("canceled the upload", {
                            position: "top-center",
                          });
                          break;
                        case "storage/unknown":
                          // Unknown error occurred, inspect error.serverResponse
                          toast.info("Server Error", {
                            position: "top-center",
                          });
                          break;
                      }
                    },
                    async () => {
                     await getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                          setData((prev) => {
                            return [
                              ...prev,
                              {
                                imageName: image.name
                                  .split(".")[0]
                                  .toUpperCase(),
                                imageUrl: downloadURL,
                                category: category || "Other",
                                user: user || uuidv4,
                              },
                            ];
                          });
                        })
                        .catch((error) => {
                          console.log(error);
                          toast.info(error.message, { position: "top-center" });
                        });
                    }
                  );
                });
                
              }
          } else {
            return toast.error("Please select an image file (png or jpg)", {
              position: "top-center",
            });
          }
        }
        Promise.all(promises).then(() => {
          alert("Successfully Uploaded")
          setLoading(false);
          setUploaded(true);
        })
      }
      
    };
    uploadImages();
  }, [files]);
  return {
    iProgress,
    isLoadingI,
    data,
    uploaded,
  };
};
export default useUpload;
