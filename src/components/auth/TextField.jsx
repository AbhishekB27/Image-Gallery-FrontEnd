import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const TextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  // console.log(field)
  // console.log(meta)
  // console.log(helpers)
  // console.log(props)
  return (
    <div className="flex relative text-sm flex-col gap-1">
      <span className="absolute top-[7px] left-2">
        <FontAwesomeIcon icon={props.fIcon} />
      </span>
      <Field
        {...field}
        placeholder={label}
        id={props.name}
        {...props}
        className={`border border-blue-400 bg-transparent placeholder-transparent placeholder:text-black px-[6px] py-[4px] pl-[27px] peer w-full outline-none rounded-sm ${
          meta.error && meta.touched
            ? "ring-2 ring-red-400 ring-offset-2"
            : meta.touched
            ? "ring-2 ring-green-400 ring-offset-2"
            : ""
        }`}
      />
      {props.eyeButton === undefined ? "" : props.eyeButton}
      <label
        htmlFor={props.name}
        className="absolute bg-[#edf2f4] dark:bg-[#14213d] -top-[14px] left-[10px] cursor-text transition-all duration-200 ease-linear peer-placeholder-shown:top-[6px] peer-placeholder-shown:left-[28px] peer-focus:-top-[14px] peer-focus:left-[10px] px-1"
      >
        {label}
      </label>
      <div className="w-fit h-[25px] text-sm">
        <ErrorMessage
          name={props.name}
          component="div"
          className="text-red-500 w-fit h-fit"
        />
      </div>
    </div>
  );
};
