import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteIcon, EditIcon } from "../../../assets/images/Icons";
import { ModalForDelete } from "../../../components/ModalForDelete";
import ReusableTable from "../../../components/shared/Table/Tabele";
import { useCategory } from "../../../context/CategoryContex";
import { getElementServices } from "../../../services/ServicesGenerator";
import { CotegoryEditBtn, DeleteBtn } from "./CategoryStyle";

export const CategoryTable = () => {
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const setIsOpenModal = useCategory((state) => state?.setIsOpenModal);
  const setIdForEdit = useCategory((state) => state?.setIdForEdit);
  const [deleteNumId, setDeleteNumId] = useState("");
  const { t } = useTranslation();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getElementServices("/categories", setCategory);
  }, []);

  const columns = [
    {
      id: "category",
      label: t("category.categor"),
      width: "100%",
      align: "start",
    },
    { id: "edit", label: "", width: "" },
    { id: "delete", label: "", width: "" },
  ];

  const rows = category.map((item) => ({
    category: item.category,
    id: item.id,
    edit: (
      <CotegoryEditBtn
        onClick={() => {
          setIsOpenModal(true);
          setIdForEdit(item.id);
        }}
      >
        <EditIcon />
      </CotegoryEditBtn>
    ),
    delete: (
      <DeleteBtn
        sx={{ textAlign: "end" }}
        onClick={() => {
          setDeleteNumId(item.id);
          setisOpenDeleteModal(true);
        }}
      >
        <DeleteIcon />
      </DeleteBtn>
    ),
  }));
  return (
    <>
      <ReusableTable columns={columns} rows={rows} />

      {/* Modal for delete */}
      <ModalForDelete
        isOpen={isOpenDeleteModal}
        setIsOpen={setisOpenDeleteModal}
        whatDelete={"categories"}
        deleteId={deleteNumId}
      />
    </>
  );
};

export default CategoryTable;
