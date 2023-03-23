import React, { useContext } from "react";
import { SearchContext } from "../../context/CreateZustand";

import ThemeContext from "../../theme/ThemeContex";
import { SerchLabel, SerchLabelInput } from "./SearchStyle";

export const Search = () => {
  const { themeMode } = useContext(ThemeContext);

  const { searchValue, setSearchValue } = useContext(SearchContext);

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
