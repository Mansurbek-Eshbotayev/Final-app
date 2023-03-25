import { DialogActions, DialogContent } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { GlobalTechnologyModal } from "../../../assets/styles/AppGlobalCss";
import { Modal } from "../../../components/Modal";
import { SwitchTable } from "../../../components/shared/switch";
import {
  editElementServices,
  postElementServices,
} from "../../../services/ServicesGenerator";
import {
  CotegorAddBtn,
  CotegorForm,
  ExitButton,
  FormInner,
  LabelTitle,
  SwitchTitle,
  TechnoInput,
  WrapBtn,
  WrapInformation,
  WrapSwitch,
} from "./TechnologyStyle";

export const TechnologyForm = ({ modal, setModal, editId }) => {
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

      if (editId) {
        editElementServices("technology", editId, dataType);
      } else {
        postElementServices("technology", dataType);
      }
      window.location.reload(false);
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Name is Required";
      }

      if (!values.description) {
        errors.description = "Description is Required";
      }

      if (!values.thumbnail) {
        errors.thumbnail = "Thumbnail is Required";
      }

      if (!values.link) {
        errors.link = "Link is Required";
      }
      return errors;
    },
  });

  const { getFieldProps } = formik;

  return (
    <>
      <Modal
        sx={{ width: 515 }}
        modal={modal}
        setModal={setModal}
        title={!editId ? t("again.add") : t("again.edit")}
      >
        <ExitButton onClick={() => setModal(false)} />
        <CotegorForm onSubmit={formik.handleSubmit}>
          <DialogContent
            dividers
            sx={{ paddingBottom: "20px", overflowX: "hidden" }}
          >
            <FormInner>
              <WrapInformation>
                <LabelTitle htmlFor="name">{t("techno.name")}</LabelTitle>
                <TechnoInput
                  value={formik.values.name}
                  defaultValue={""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="name"
                  type={"text"}
                  name="name"
                  placeholder={
                    formik.touched.name && formik.errors.name
                      ? `${formik.errors.name}`
                      : "masalan: Memoriform"
                  }
                  required
                />

                <LabelTitle htmlFor="description">
                  {t("techno.text")}
                </LabelTitle>
                <TechnoInput
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="description"
                  type={"text"}
                  name="description"
                  placeholder={
                    formik.touched.description && formik.errors.description
                      ? `${formik.errors.description}`
                      : "masalan: Memoriform"
                  }
                  required
                />
              </WrapInformation>

              <WrapInformation>
                <LabelTitle htmlFor="thumbnail">
                  {t("techno.picture")}
                </LabelTitle>
                <TechnoInput
                  value={formik.values.thumbnail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="thumbnail"
                  type={"text"}
                  name="thumbnail"
                  placeholder={
                    formik.touched.thumbnail && formik.errors.thumbnail
                      ? `${formik.errors.thumbnail}`
                      : "masalan: Video code"
                  }
                  required
                />

                <LabelTitle htmlFor="link">{t("techno.video")}</LabelTitle>
                <TechnoInput
                  value={formik.values.link}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="link"
                  type={"text"}
                  name="link"
                  placeholder={
                    formik.touched.link && formik.errors.link
                      ? `${formik.errors.link}`
                      : "masalan: Video code"
                  }
                  required
                />
              </WrapInformation>
            </FormInner>
          </DialogContent>

          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <WrapSwitch>
              <SwitchTitle>{t("again.status")}</SwitchTitle>
              <SwitchTable status={true} {...getFieldProps("isActive")} />
            </WrapSwitch>

            <WrapBtn>
              <CotegorAddBtn type="submit">
                {!editId ? t("again.add") : t("again.edit")}
              </CotegorAddBtn>
            </WrapBtn>
          </DialogActions>
        </CotegorForm>
        <GlobalTechnologyModal />
      </Modal>
    </>
  );
};
