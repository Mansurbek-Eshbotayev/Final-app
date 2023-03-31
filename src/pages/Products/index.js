import React from "react";
import { useTranslation } from "react-i18next";
import { PostBtn } from "../../assets/styles/AppStyle";
import { useProduct } from "../../context/ProductContex";
import { ProductFormBox } from "./containers/ProductFormBox";
import ProductTable from "./containers/ProductTable";

function Products() {
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
}

export default Products;
