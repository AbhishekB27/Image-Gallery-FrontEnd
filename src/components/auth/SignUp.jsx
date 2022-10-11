import React, { useState } from "react";
import { TextField } from "./TextField";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import SignUpSchema from "./signUpSchema";
import { FormButton } from "./FormButton";
import { faEnvelope, faEye, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { EyeButton } from "./EyeButton";
import SignUpImg from "./SignUp.png";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../actions/auth";

export const SignUp = () => {
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false);
  const handleSubmit = (data) => {
    dispatch(signUpUser(data))
    // console.log(data);
  };
  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };
  return (
    <div className="w-full relative min-h-[77.76vh] md:min-h-[87.50vh] md:h-auto h-auto px-3 py-1 border-[#14213d] dark:border-[#edf2f4] flex justify-center items-center gap-2 rounded-lg">
      <div className="w-[50%] hidden relative lg:flex flex-col justify-center items-center border-2 border-[#14213d] dark:border-[#edf2f4]">
        <div className="lg:w-[80%] p-2 h-auto min-h-[33.20rem] flex justify-center items-center md:w-[85%]">
          <img className="" src={SignUpImg} alt="" />
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="lg:w-[50%] px-2 py-2 bordr-2 border-[#14213d] dark:border-[#edf2f4] flex flex-col gap-3 w-full min-h-[33.20rem] h-auto">
            <TextField
              label="UserName"
              name="userName"
              type="text"
              fIcon={faUser}
            />
            <TextField
              label="FirstName"
              name="firstName"
              type="text"
              fIcon={faUser}
            />
            <TextField
              label="LastName"
              name="lastName"
              type="text"
              fIcon={faUser}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fIcon={faEnvelope}
            />
            <TextField
              label="Password"
              name="password"
              type={toggle ? "text" : "password"}
              fIcon={faLock}
              eyeButton={<EyeButton toggle={toggle} setToggle={setToggle} />}
            />
            <TextField
              label="ConfirmPassword"
              name="confirmPassword"
              type={toggle ? "text" : "password"}
              fIcon={faLock}
              eyeButton={<EyeButton toggle={toggle} setToggle={setToggle} />}
            />
            <FormButton btnName='Register' />
          </Form>
        )}
      </Formik>
    </div>
  );
};
