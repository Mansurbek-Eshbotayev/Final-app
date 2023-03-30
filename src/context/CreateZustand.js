import create from "zustand";

const useSearchStore = create((set) => ({
  searchValue: "",
  setSearchValue: (value) => set(() => ({ searchValue: value })),
}));

export default useSearchStore;
