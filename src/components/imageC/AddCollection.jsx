import { faAdd, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nature from "./nature.jpeg";
import Image from "./addC.png";
import { useDispatch, useSelector } from "react-redux";
import { createCollections, updateCollections } from "../../actions/collectionI";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const AddCollection = () => {
  const { isLoading } = useSelector((state) => state.loader);
  const {imgId} = useParams()
  const { user,token } = useSelector((state) => state.auth);
  const { images } = useSelector((state) => state.images);
  const { collection } = useSelector((state) => state.collections);
  const [visibility, setVisibility] = useState(true);
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate()
  const filteredImg = images.filter(item=> item._id === imgId)
  const [collectionData, setCollectionData] = useState({
    cName: "",
    cDescription: "",
    userId: user._id,
    imageUrls: filteredImg[0].imageUrl,
  });
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  
  console.log(isLoading);
  const collectionInfo = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name + " : " + value);
    setCollectionData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  // console.log(collectionData)
  const dispatch = useDispatch();
  const createCollection = () => {
    dispatch(createCollections(collectionData));
  };
  const updateCollection = (event) => {
    const cId = event.target.id;
    const imageUrl = filteredImg[0].imageUrl
    console.log(imageUrl)
    setSelected(!selected)
    dispatch(updateCollections({cId,imageUrl,userId: user._id}))
  }
  return (
    <div
      className={`w-full text-[#01332A] bg-black/70 font-ubuntu absolute top-0 h-screen flex flex-col md:justify-center md:items-center md:flex-row md:gap-0 gap-3 z-10`}
    >
      <div
        style={{ backgroundImage: `url(${Nature})` }}
        className="flex bg-cover md:w-[50%] md:h-[90%] bg-no-repeat px-2 h-full py-1 flex-col gap-3"
      >
        <div className="w-full text-base border-b-2 border-[#01332A]">
          <button onClick={()=>{navigate(-1)}} className="px-2 py-1">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="text-center font-medium text-lg border-b-2 border-[#01332A] w-fit">
          Add Collection{" "}
        </div>
        <AnimatePresence>
          {visibility ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col gap-3"
            >
              <motion.button
                onClick={() => setVisibility(!visibility)}
                whileTap={{ scale: 0.8 }}
                className="flex justify-center items-center gap-3 text-lg py-[6px] bg-[#01332A]/90 text-white w-full rounded-md"
              >
                {" "}
                Create New Collection <FontAwesomeIcon icon={faAdd} />
              </motion.button>
              <div className="text-lg border-t-2 space-y-4 border-[#01332A] w-full">
                Existing Collections:
                {
                  collection.map(item=>{
                    return <motion.div
                    key={item._id}
                    id={item._id}
                    whileTap={{scale:0.9}}
                    onClick={updateCollection}
                    name="hello"
                    className={`text-base w-full hover:cursor-pointer bg-[#01332A]/50 text-white rounded-md px-2 py-[6px] ${selected && 'border-4 ring-4 ring-emerald-300 border-emerald-900 '}`}>
                    {
                      item.cName
                    }
                  </motion.div>
                  })
                }
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="w-full space-y-3"
            >
              <div className="relative border-2 text-[#01332A] border-[#01332A] rounded-md">
                <input
                  onChange={collectionInfo}
                  className="peer outline-none w-full placeholder:text-transparent px-3 py-2 bg-transparent rounded-md"
                  placeholder="Name"
                  type="text"
                  name="cName"
                  id="cName"
                />
                <label
                  className="absolute left-[8px] px-1 top-[-12px] z-50 text-sm bg-[#DCF4FE] font-medium peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[13px] transition-all"
                  htmlFor="cName"
                >
                  Name
                </label>
              </div>
              <div className="relative border-2 border-[#01332A] rounded-md">
                <textarea
                  onChange={collectionInfo}
                  className="peer outline-none w-full placeholder:text-transparent px-3 py-2 bg-transparent rounded-md resize-none"
                  placeholder="Description"
                  name="cDescription"
                  id="description"
                ></textarea>
                <label
                  className="absolute left-[8px] px-1 top-[-12px] z-50 text-sm bg-[#E2F5FC] font-medium peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[13px] transition-all"
                  htmlFor="cName"
                >
                  Description
                </label>
              </div>
              {isLoading ? (
               <div class="w-full h-[70px] grid place-items-center">
               <div class="shadow-[28px_0px_0_0_rgba(1,51,42,0.2),_22.7px_16.5px_0_0_rgba(1,51,42,0.4),_8.68px_26.6px_0_0_rgba(1,51,42,0.6),_-8.68px_26.6px_0_0_rgba(1,51,42,0.8),_-22.7px_16.5px_0_0_#01332A] animate-spin w-[9px] h-[9px] rounded-[9px]"></div>
               </div>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={createCollection}
                  className="flex justify-center items-center gap-3 text-lg py-[6px] bg-[#01332A]/90 text-white w-full rounded-md"
                >
                  {" "}
                  Create New
                  <FontAwesomeIcon icon={faAdd} />
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
