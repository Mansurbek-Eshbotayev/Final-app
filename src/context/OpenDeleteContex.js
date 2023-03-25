import create from "zustand";

const useDeleteModalStore = create((set) => ({
  isOpenDeleteModal: false,
  setIsOpenDeleteModal: (value) => set(() => ({ isOpenDeleteModal: value })),
}));

export default useDeleteModalStore;
