import { DialogActions, DialogContent, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { SwitchTable } from "../../../components/shared/switch";
import { useCarousel } from "../../../context/CarouselContex";
import {
  AddorEditBtn,
  CarouselInput,
  CarouselLabel,
  CarouselOldImg,
  CotegorForm,
  CotegorText,
  LabelTitle,
  NewLabeltitle,
  SwitchTitle,
  WrapImg,
  WrapInformation,
  WrapSwitch,
} from "../containers/CarouselStyle";

export const FormCarousel = ({ formik }) => {
  const setIsOpenModal = useCarousel((state) => state.setIsOpenModal);
  const idForEdit = useCarousel((state) => state?.idForEdit);
  const oldImg = useCarousel((state) => state?.oldImg);
  const { t } = useTranslation();
  const { getFieldProps } = formik;
  return (
    <>
      <CotegorForm onSubmit={formik.handleSubmit}>
        <DialogContent dividers>
          <CotegorText>
            {!idForEdit ? t("carousel.forname") : t("carousel.newforname")}
          </CotegorText>
          <TextField
            sx={{ marginBottom: "40px", width: "100%" }}
            type="text"
            name="title"
            {...getFieldProps("title")}
            onChange={formik.handleChange}
            label="Masalan: Kechalari sokin dam oling"
            required
          />

          <WrapInformation>
            {idForEdit ? (
              <WrapImg>
                <CarouselOldImg
                  src={`http://localhost:1212/carousel/${oldImg}`}
                  alt="Matras"
                />

                <LabelTitle>{t("carousel.old")}</LabelTitle>
              </WrapImg>
            ) : (
              ""
            )}

            <CarouselLabel>
              <CarouselInput
                type="file"
                name="image"
                placeholder="add img"
                accept="image/*"
                onChange={(e) => {
                  formik.setFieldValue("image", e.currentTarget.files[0]);
                }}
                required
              />
              <NewLabeltitle>{t("carousel.new")}</NewLabeltitle>
            </CarouselLabel>
          </WrapInformation>

          <WrapSwitch>
            <SwitchTitle>{t("carousel.status")}</SwitchTitle>
            <SwitchTable status={true} />
          </WrapSwitch>
        </DialogContent>
        <DialogActions>
          <AddorEditBtn type="submit" onClick={() => setIsOpenModal(false)}>
            {!idForEdit ? t("again.add") : t("again.edit")}
          </AddorEditBtn>
        </DialogActions>
      </CotegorForm>
    </>
  );
};
