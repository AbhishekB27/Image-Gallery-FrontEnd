import React from "react";
import { Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const FormButton = ({ btnName }) => {
  const { isLoading } = useSelector((state) => state.loader);
  return (
    <div className="flex flex-col">
      <div className="">
        <Field
          name="acceptTerms"
          type="checkbox"
          className=""
          id="acceptTerms"
        />
        <label htmlFor="acceptTerms" className=" pl-1">
          I have read and agree to the Terms
        </label>
        <div className="w-fit h-[25px] text-sm">
          <ErrorMessage
            name="acceptTerms"
            component="div"
            className="text-red-500 w-fit h-fit"
          />
        </div>
      </div>

      <div className=" w-full h-full flex justify-center items-center">
        {isLoading ? (
          <div class="w-full h-[70px] grid place-items-center">
            <div class="shadow-[28px_0px_0_0_rgba(71,75,255,0.2),_22.7px_16.5px_0_0_rgba(71,75,255,0.4),_8.68px_26.6px_0_0_rgba(71,75,255,0.6),_-8.68px_26.6px_0_0_rgba(71,75,255,0.8),_-22.7px_16.5px_0_0_#474bff] animate-spin w-[9px] h-[9px] rounded-[9px]"></div>
          </div>
        ) : (
          <button
            className={`relative  bg-blue-600 px-2 w-full h-full font-medium py-1 rounded-md`}
            type="submit"
          >
            {btnName}
          </button>
        )}
      </div>
    </div>
  );
};
