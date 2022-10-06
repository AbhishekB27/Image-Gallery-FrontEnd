import * as Yup from "yup";

const LogInSchema = () => {
  return Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
};
export default LogInSchema;
