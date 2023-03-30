import create from "zustand";

export const useCarousel = create((set) => ({
  isOpenModal: false,
  idForEdit: "",
  oldImg: "",
  setIsOpenModal: (value) => set(() => ({ isOpenModal: value })),
  setIdForEdit: (value) => set(() => ({ idForEdit: value })),
  setOldImg: (value) => set(() => ({ oldImg: value })),
}));
