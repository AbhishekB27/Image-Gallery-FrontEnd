import {
    faThumbsDown, faThumbsUp,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  import avtar from "./UserAvtar.jpg";
  import noReview from "./NoReview.png";

export const Review = ({reviews,imgId}) => {
  return (
    <div className="w-full border-t-2 border-slate-400 pt-2 flex flex-col gap-3 justify-center items-center">
            {reviews.length === 0 ? (
              <div className="text-center text-base md:text-2xl">
                <img
                  className="object-cover h-fit object-center"
                  src={noReview}
                  alt=""
                />
                No Reviews
              </div>
            ) : (
              reviews.filter(i => i.imgId === imgId).map((item) => {
                return (
                  <div className="w-full md:w-[68%] border-2 border-slate-400 rounded-md p-1">
                    <div className="flex gap-2 justify-start items-center">
                      <div className="relative w-[3rem] h-[3rem] rounded-full">
                        <img
                          className="w-full hover:grayscale hover:cursor-pointer h-full object-cover rounded-full"
                          src={item.user.avtar.url || `https://joeschmoe.io/api/v1/${item.user.userName}`}
                          alt=""
                        />
                      </div>
                     {item.user.userName}
                    </div>
                    <div>
                      {" "}
                      {item.review}{" "}
                    </div>
                    <div className="flex justify-start items-center gap-10">
                      {" "}
                      <FontAwesomeIcon
                        className="cursor-pointer md:text-xl hover:text-blue-700 active:scale-90"
                        icon={faThumbsUp}
                      />{" "}
                      <FontAwesomeIcon
                        className="cursor-pointer md:text-xl active:scale-90 hover:text-slate-400"
                        icon={faThumbsDown}
                      />{" "}
                    </div>
                  </div>
                );
              })
            )}
          </div>
  )
}
