import React, { useContext } from "react";
import useSearchStore from "../../context/CreateZustand";

import ThemeContext from "../../theme/themeContex/ThemeContex";
import { SerchLabel, SerchLabelInput } from "./SearchStyle";

export const Search = () => {
  const { themeMode } = useContext(ThemeContext);

  const setSearchValue = useSearchStore((state) => state?.setSearchValue);

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <SerchLabel>
      <SerchLabelInput
        theme={themeMode}
        type="search"
        name="search"
        placeholder="Search Order"
        onChange={handleSearchInputChange}
      />
    </SerchLabel>
  );
};
