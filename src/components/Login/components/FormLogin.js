import React from "react";
import { useTranslation } from "react-i18next";
import {
  FormButton,
  FormInput,
  FormLabel,
  FormLabelMargin,
  FormStyle,
  FormTitle,
  LabeleError,
  Loginwrap,
} from "./LoginFormStyle";

export const FormLogin = ({ formik }) => {
  const { t } = useTranslation();
  return (
    <Loginwrap>
      <FormStyle onSubmit={formik.handleSubmit}>
        <FormTitle>Kirish</FormTitle>
        {formik.errors.userName && formik.errors.userName ? (
          <LabeleError>{formik.errors.userName}</LabeleError>
        ) : (
          ""
        )}
        <FormLabel>
          <FormInput
            value={formik.values.userName}
            onChange={formik.handleChange}
            defaultValue={""}
            onBlur={formik.handleBlur}
            type="text"
            name="userName"
            placeholder="userName"
            required
          />
        </FormLabel>

        {formik.touched.password && formik.errors.password ? (
          <LabeleError>{formik.errors.password}</LabeleError>
        ) : (
          ""
        )}
        <FormLabelMargin>
          <FormInput
            value={formik.values.password}
            defaultValue={""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            name="password"
            placeholder="Parol"
            required
          />
        </FormLabelMargin>
        <FormButton type="submit">{t("login.entr")}</FormButton>
      </FormStyle>
    </Loginwrap>
  );
};
