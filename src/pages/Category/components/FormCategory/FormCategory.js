import { DialogActions, DialogContent, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { SwitchTable } from "../../../../components/shared/switch/Switch";
import { useCategory } from "../../../../context/CategoryContex";
import {
  CotegorAddBtn,
  CotegorText,
  CotegoryForm,
  SwitchTitle,
  WrapSwitch,
} from "./FormCategoryStyle";

export const FormCategory = ({ formik }) => {
  const idForEdit = useCategory((state) => state?.idForEdit);
  const setIsOpenModal = useCategory((state) => state.setIsOpenModal);
  const { t } = useTranslation();
  const { getFieldProps } = formik;
  return (
    <>
      <CotegoryForm onSubmit={formik.handleSubmit}>
        <DialogContent dividers>
          <CotegorText>{t("category.name")}</CotegorText>
          <TextField
            sx={{ marginBottom: "20px" }}
            type="text"
            name="category_name"
            {...getFieldProps("category")}
            onChange={formik.handleChange}
            label="masalan: Model B"
            required
          />
          <WrapSwitch>
            <SwitchTitle>{t("again.status")}</SwitchTitle>
            <SwitchTable status={true} {...getFieldProps("isActive")} />
          </WrapSwitch>
        </DialogContent>
        <DialogActions>
          <CotegorAddBtn type="submit" onClick={() => setIsOpenModal(false)}>
            {!idForEdit ? t("again.add") : t("again.edit")}
          </CotegorAddBtn>
        </DialogActions>
      </CotegoryForm>
    </>
  );
};
