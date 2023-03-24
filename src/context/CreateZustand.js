// import { createContext } from "react";
import create from "zustand";
// export const SearchContext = createContext();

const useSearchStore = create((set) => ({
  searchValue: "",
  setSearchValue: (value) => set(() => ({ searchValue: value })),
}));

export default useSearchStore;
