import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export const EyeButton = ({ toggle, setToggle }) => {
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleToggle}
        className="transition-all absolute top-[7px] right-2"
      >
        {" "}
        <FontAwesomeIcon
          className={`${toggle ? "scale-90 text-blue-400" : ""}`}
          icon={!toggle ? faEyeSlash : faEye}
        />{" "}
      </button>
    </div>
  );
};
