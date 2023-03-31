import { DialogActions, DialogContent } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { SwitchTable } from "../../../../components/shared/switch";
import { useTechnology } from "../../../../context/TechnologyContex";
import {
  CotegorAddBtn,
  CotegorForm,
  FormInner,
  LabeleError,
  LabelTitle,
  SwitchTitle,
  TechnoInput,
  WrapBtn,
  WrapInformation,
  WrapSwitch,
} from "./FormTrchnologyStyle";

export const FormTrchnology = ({ formik }) => {
  const idForEdit = useTechnology((state) => state?.idForEdit);
  const { t } = useTranslation();

  const { getFieldProps } = formik;
  return (
    <>
      <CotegorForm onSubmit={formik.handleSubmit}>
        <DialogContent
          dividers
          sx={{ paddingBottom: "20px", overflowX: "hidden" }}
        >
          <FormInner>
            <WrapInformation>
              <LabelTitle htmlFor="name">{t("techno.name")}</LabelTitle>
              {formik.touched.name && formik.errors.name ? (
                <LabeleError>{formik.errors.name}</LabeleError>
              ) : (
                ""
              )}
              <TechnoInput
                value={formik.values.name}
                defaultValue={""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="name"
                type={"text"}
                name="name"
                placeholder="masalan: Memoriform"
                required
              />

              <LabelTitle htmlFor="description">{t("techno.text")}</LabelTitle>
              {formik.touched.description && formik.errors.description ? (
                <LabeleError>{formik.errors.description}</LabeleError>
              ) : (
                ""
              )}
              <TechnoInput
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="description"
                type={"text"}
                name="description"
                placeholder="masalan: Memoriform"
                required
              />
            </WrapInformation>

            <WrapInformation>
              <LabelTitle htmlFor="thumbnail">{t("techno.picture")}</LabelTitle>
              {formik.touched.thumbnail && formik.errors.thumbnail ? (
                <LabeleError>{formik.errors.thumbnail}</LabeleError>
              ) : (
                ""
              )}
              <TechnoInput
                value={formik.values.thumbnail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="thumbnail"
                type={"text"}
                name="thumbnail"
                placeholder="masalan: Video code"
                required
              />

              <LabelTitle htmlFor="link">{t("techno.video")}</LabelTitle>
              {formik.touched.link && formik.errors.link ? (
                <LabeleError>{formik.errors.link}</LabeleError>
              ) : (
                ""
              )}
              <TechnoInput
                value={formik.values.link}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="link"
                type={"text"}
                name="link"
                placeholder="masalan: Video code"
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
              {!idForEdit ? t("again.add") : t("again.edit")}
            </CotegorAddBtn>
          </WrapBtn>
        </DialogActions>
      </CotegorForm>
    </>
  );
};
