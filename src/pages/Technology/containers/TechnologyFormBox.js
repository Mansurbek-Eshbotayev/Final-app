import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { GlobalTechnologyModal } from "../../../assets/styles/AppGlobalCss";
import { Modal } from "../../../components/Modal";
import { useTechnology } from "../../../context/TechnologyContex";
import { TechnoSchema } from "../models/TechnoSchema";
import {
  editElementServices,
  postElementServices,
} from "../../../services/ServicesGenerator";
import { FormTrchnology } from "../components/FormTechnology/FormTrchnology";
import { ExitButton } from "../../../assets/styles/AppStyle";

export const TechnologyFormBox = () => {
  const idForEdit = useTechnology((state) => state?.idForEdit);
  const [isOpenModal, setIsOpenModal] = useTechnology((state) => [
    state.isOpenModal,
    state.setIsOpenModal,
  ]);
  const { t } = useTranslation();

  // Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      thumbnail: "",
      link: "",
      description: "",
      isActive: true,
    },
    onSubmit: (values) => {
      const dataType = {
        name: values.name,
        thumbnail: values.thumbnail,
        link: values.link,
        description: values.description,
        isActive: values.isActive,
      };

      if (idForEdit) {
        editElementServices("technology", idForEdit, dataType);
      } else {
        postElementServices("technology", dataType);
      }
      window.location.reload(false);
    },
    validationSchema: TechnoSchema,
  });

  return (
    <>
      <Modal
        sx={{ width: 515 }}
        modal={isOpenModal}
        setModal={setIsOpenModal}
        title={!idForEdit ? t("again.add") : t("again.edit")}
      >
        <ExitButton onClick={() => setIsOpenModal(false)} />
        <FormTrchnology formik={formik} />
        <GlobalTechnologyModal />
      </Modal>
    </>
  );
};
