import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { FormLogin } from "./components/FormLogin";
import { LoginSchema } from "./models/LoginSchema";

export const Login = () => {
  const navigate = useNavigate();

  // Formik
  const formik = useFormik({
    initialValues: {
      userName: "admin",
      password: "admin",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:1212/admin/login", {
          userName: values.userName,
          password: values.password,
        })
        .then((data) => {
          if (data.status === 200) {
            localStorage.setItem("token", data.data.token);
            navigate("/buyurtmalar");
            window.location.reload(false);
          }
        })
        .catch((err) => console.log(err));
    },
    validationSchema: LoginSchema,
  });

  console.log(formik.touched);

  return <FormLogin formik={formik} />;
};
