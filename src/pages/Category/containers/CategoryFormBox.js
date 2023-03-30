import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "../../../components/Modal";
import { useCategory } from "../../../context/CategoryContex";
import {
  editElementServices,
  postElementServices,
} from "../../../services/ServicesGenerator";
import { FormCategory } from "../components/FormCategory";
import { ExitButton } from "./CategoryStyle";

export const CategoryFormBox = () => {
  const idForEdit = useCategory((state) => state?.idForEdit);
  const [isOpenModal, setIsOpenModal] = useCategory((state) => [
    state.isOpenModal,
    state.setIsOpenModal,
  ]);
  const { t } = useTranslation();

  // Formik
  const formik = useFormik({
    initialValues: {
      category: "",
      isActive: true,
    },
    onSubmit: (values) => {
      const dataType = {
        category: values.category,
        isActive: values.isActive,
      };

      if (idForEdit) {
        editElementServices("categories", idForEdit, dataType);
      } else {
        postElementServices("categories", dataType);
      }
      window.location.reload(false);
    },
  });

  return (
    <>
      <Modal
        modal={isOpenModal}
        setModal={setIsOpenModal}
        title={!idForEdit ? t("again.add") : t("again.edit")}
      >
        <ExitButton onClick={() => setIsOpenModal(false)} />
        <FormCategory formik={formik} />
      </Modal>
    </>
  );
};
