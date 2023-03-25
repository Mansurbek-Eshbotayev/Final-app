import create from "zustand";

export const useModalStore = create((set) => ({
  isOpenModal: false,
  setIsOpenModal: (value) => set(() => ({ isOpenModal: value })),
}));

export const useEditStore = create((set) => ({
  idForEdit: "",
  setIdForEdit: (value) => set(() => ({ idForEdit: value })),
}));
