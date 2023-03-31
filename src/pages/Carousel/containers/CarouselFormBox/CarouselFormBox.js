import React from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Modal } from "../../../../components/Modal";
import { useCarousel } from "../../../../context/CarouselContex";
import { FormCarousel } from "../../components/FormCarousel/FormCarousel";
import { ExitButton } from "./CarouselFormBoxStyle";
import {
  editElementServices,
  postElementServices,
} from "../../../../services/ServicesGenerator";

export const CarouselFormBox = () => {
  const { t } = useTranslation();
  const idForEdit = useCarousel((state) => state?.idForEdit);
  const [isOpenModal, setIsOpenModal] = useCarousel((state) => [
    state.isOpenModal,
    state.setIsOpenModal,
  ]);

  // Formik
  const formik = useFormik({
    initialValues: {
      title: "",
      image: null,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("image", values.image);

      if (idForEdit) {
        editElementServices("carousel", idForEdit, formData);
      } else {
        postElementServices("carousel", formData);
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
        <FormCarousel formik={formik} />
      </Modal>
    </>
  );
};
