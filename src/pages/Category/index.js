import React from "react";
import { useTranslation } from "react-i18next";
import { useCategory } from "../../context/CategoryContex";
import CategoryTable from "./containers/CategoryTable/CategoryTable";
import { CategoryFormBox } from "./containers/CategoryFormBox/CategoryFormBox";
import { PostBtn } from "../../assets/styles/AppStyle";

function Category() {
  const setIsOpenModal = useCategory((state) => state?.setIsOpenModal);
  const setIdForEdit = useCategory((state) => state?.setIdForEdit);
  const { t } = useTranslation();
  return (
    <>
      <CategoryTable />

      <PostBtn
        onClick={() => {
          setIsOpenModal(true);
          setIdForEdit("");
        }}
      >
        {t("again.add")}
      </PostBtn>

      <CategoryFormBox />
    </>
  );
}

export default Category;
