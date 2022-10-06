import React from "react";
import { Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export const FormButton = ({btnName}) => {
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

      <div className="">
        <button className={`relative bg-blue-600 px-2 font-medium py-1 rounded-md`} type="submit">
          {btnName}
        </button>
      </div>
    </div>
  );
};
