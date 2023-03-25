import create from "zustand";

export const useTechnology = create((set) => ({
  isOpenModal: false,
  idForEdit: "",
  setIsOpenModal: (value) => set(() => ({ isOpenModal: value })),
  setIdForEdit: (value) => set(() => ({ idForEdit: value })),
}));
