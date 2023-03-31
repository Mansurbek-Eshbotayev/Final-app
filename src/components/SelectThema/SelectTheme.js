import { useContext } from "react";
import { OptionStyle, SelectStyle } from "./SelectThemeStyle";
import ThemeContext from "../../theme/themeContex/ThemeContex";
export const SelectTheme = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  return (
    <>
      <SelectStyle
        theme={themeMode}
        defaultValue={localStorage.getItem("theme") || "light"}
        onChange={(evt) => {
          setThemeMode(evt.target.value);
          localStorage.setItem("theme", evt.target.value);
        }}
      >
        <OptionStyle value={"light"}>Light</OptionStyle>
        <OptionStyle value={"dark"}>Dark</OptionStyle>
      </SelectStyle>
    </>
  );
};
