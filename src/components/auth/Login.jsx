import React, { useEffect, useState } from "react";
import { TextField } from "./TextField";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import SignUpSchema from "./signUpSchema";
import { FormButton } from "./FormButton";
import { faEnvelope, faEye, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { EyeButton } from "./EyeButton";
import LoginImg from './Login.png'
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/auth";
import LogInSchema from "./loginSchema";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {token} = useSelector(state=>state.auth)
  
  useEffect(() => {
    if(token){
      navigate('/')
    }
  }, [token])
  const [toggle, setToggle] = useState(false);
  const handleSubmit = (data) => {
      console.log(data);
    dispatch(loginUser(data))
  };
  const initialValues = {
    email: "",
    password: "",
    acceptTerms: false,
  };
  return (
    <div className="w-full relative min-h-[30rem] h-auto px-3 py-1 border-[#14213d] dark:border-[#edf2f4] flex justify-center items-center gap-2 rounded-lg">

<div className="w-[50%] hidden relative lg:flex flex-col justify-center items-center border-2 border-[#14213d] dark:border-[#edf2f4]">
        <div className="lg:w-[80%] p-2 h-[25.20rem] flex justify-center items-center md:w-[85%]">
          <img className="" src={LoginImg} alt="" />
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={LogInSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
                <Form className="lg:w-[50%] px-2 py-2 bordr-2 border-[#14213d] dark:border-[#edf2f4] flex flex-col justify-center items-cente gap-3 w-full h-[25.20rem]">
            {/* <TextField
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
            /> */}
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
            {/* <TextField
              label="ConfirmPassword"
              name="confirmPassword"
              type={toggle ? "text" : "password"}
              fIcon={faLock}
              eyeButton={<EyeButton toggle={toggle} setToggle={setToggle} />}
              /> */}
              <FormButton btnName='LogIn'/>
          </Form>
        )}
      </Formik>
    </div>
  );
};

