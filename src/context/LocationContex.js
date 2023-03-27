import create from "zustand";

export const useLocation = create((set) => ({
  isOpenModal: false,
  idForEdit: "",
  setIsOpenModal: (value) => set(() => ({ isOpenModal: value })),
  setIdForEdit: (value) => set(() => ({ idForEdit: value })),
}));
