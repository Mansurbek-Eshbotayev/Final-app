import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
import {
  FormButton,
  FormInputStyle,
  FormLabelStyle,
  FormLabelStyleSecond,
  FormStyle,
  FormTitleStyle,
  Loginwrap,
} from "./LoginStyle";

export const Login = () => {
  const valueRaf = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handlFormSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:1212/admin/login", {
        userName: valueRaf.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
        if (data.status === 200) {
          localStorage.setItem("token", data.data.token);
          navigate("/buyurtmalar");
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Loginwrap>
      <FormStyle onSubmit={handlFormSubmit}>
        <FormTitleStyle>Kirish</FormTitleStyle>
        <FormLabelStyle>
          <FormInputStyle
            ref={valueRaf}
            defaultValue={"admin"}
            type="text"
            name="your_email"
            placeholder="Login"
          />
        </FormLabelStyle>

        <FormLabelStyleSecond>
          <FormInputStyle
            ref={passwordRef}
            defaultValue={"admin"}
            type="password"
            name="your_password"
            placeholder="Parol"
          />
        </FormLabelStyleSecond>

        <FormButton>Kirish</FormButton>
      </FormStyle>
    </Loginwrap>
  );
};
