import React from "react";
import { useTranslation } from "react-i18next";
import { useProduct } from "../../context/ProductContex";
import { ProductFormBox } from "./containers/ProductFormBox";
import { PostBtn } from "./containers/ProductStyle";
import ProductTable from "./containers/ProductTable";

export const Products = () => {
  const setIsOpenModal = useProduct((state) => state?.setIsOpenModal);
  const setIdForEdit = useProduct((state) => state?.setIdForEdit);
  const { t } = useTranslation();
  return (
    <>
      <ProductTable />

      <PostBtn
        onClick={() => {
          setIsOpenModal(true);
          setIdForEdit("");
        }}
      >
        {t("again.add")}
      </PostBtn>

      <ProductFormBox />
    </>
  );
};
