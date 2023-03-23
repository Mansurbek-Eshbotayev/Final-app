import React, { useContext } from "react";
import { OptionStyle, SelectStyle } from "./SelectLangStyle";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../theme/ThemeContex";

export const SelectLang = () => {
  const { i18n } = useTranslation();
  const { themeMode } = useContext(ThemeContext);
  return (
    <>
      <SelectStyle
        theme={themeMode}
        defaultValue={i18n.language}
        onChange={(evt) => {
          i18n.changeLanguage(evt.target.value);
          localStorage.setItem("lang", evt.target.value);
        }}
      >
        <OptionStyle value={"en"}>En</OptionStyle>
        <OptionStyle value={"ru"}>Ru</OptionStyle>
        <OptionStyle value={"uz"}>Uz</OptionStyle>
      </SelectStyle>
    </>
  );
};
