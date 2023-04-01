import * as Yup from "yup";

export const LoginSchema = Yup.object({
  userName: Yup.string()
    .min(5, "too short")
    .max(5, "too long")
    .required("User name is Required"),
  password: Yup.string()
    .min(5, "too short")
    .max(5, "too long")
    .required("Password is Required"),
});
