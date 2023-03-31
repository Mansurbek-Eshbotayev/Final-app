import { useFormik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GlobalModal } from "../../../assets/styles/AppGlobalCss";
import { ExitButton } from "../../../assets/styles/AppStyle";
import { Modal } from "../../../components/Modal";
import { useProduct } from "../../../context/ProductContex";
import {
  editElementServices,
  postElementServices,
} from "../../../services/ServicesGenerator";
import { FormProduct } from "../components/FormProduct/FormProduct";
import { ProductSchema } from "../models/ProductSchema";

export const ProductFormBox = () => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const idForEdit = useProduct((state) => state?.idForEdit);
  const [isOpenModal, setIsOpenModal] = useProduct((state) => [
    state.isOpenModal,
    state.setIsOpenModal,
  ]);
  const { t } = useTranslation();

  // Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      weight: "",
      images: null,
      isActive: true,
      warranty: "",
      size: "",
      capacity: "",
      body: "",
      cost: "",
      newCost: "",
      discount: true,
      new: true,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("category", productName);
      formData.append("weight", values.weight);
      formData.append("images", values.images);
      formData.append("isActive", values.isActive);
      formData.append("warranty", values.warranty);
      formData.append("size", values.size);
      formData.append("capacity", values.capacity);
      formData.append("body", values.body);
      formData.append("cost", values.cost);
      formData.append("newCost", values.newCost);
      formData.append("discount", values.discount);
      formData.append("new", values.new);

      if (idForEdit) {
        editElementServices("products", idForEdit, formData);
      } else {
        postElementServices(`products/${productId}`, formData);
      }
      window.location.reload(false);
    },
    validationSchema: ProductSchema,
  });

  return (
    <>
      <Modal
        sx={{ width: 1110 }}
        modal={isOpenModal}
        setModal={setIsOpenModal}
        title={!idForEdit ? t("again.add") : t("again.edit")}
      >
        <ExitButton onClick={() => setIsOpenModal(false)} />
        <FormProduct
          formik={formik}
          productId={setProductId}
          productName={setProductName}
        />
        <GlobalModal />
      </Modal>
    </>
  );
};
