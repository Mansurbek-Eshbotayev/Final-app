import { DialogContent } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { SwitchTable } from "../../../../components/shared/switch";
import { useLocation } from "../../../../context/LocationContex";
import {
  AddorEditBtn,
  CotegorForm,
  LabelError,
  LabelTitle,
  LocationFormInner,
  LocationImgInput,
  LocationInput,
  LocationLabelWrapImg,
  SwitchTitle,
  Textarea,
  WrapInformation,
  WrapSwitch,
} from "./FormLocationStyle";

export const FormLocation = ({ formik }) => {
  const idForEdit = useLocation((state) => state?.idForEdit);
  const { t } = useTranslation();
  return (
    <>
      <CotegorForm onSubmit={formik.handleSubmit}>
        <DialogContent dividers sx={{ paddingBottom: "40px" }}>
          <LocationFormInner>
            <LocationLabelWrapImg>
              <LocationImgInput
                type="file"
                accept="image/*"
                onChange={(e) => {
                  formik.setFieldValue("images", e.currentTarget.files[0]);
                }}
                placeholder="edd img"
              />
            </LocationLabelWrapImg>

            <WrapInformation>
              <LabelTitle>{t("local.address")}</LabelTitle>
              {formik.touched.location && formik.errors.location ? (
                <LabelError>{formik.errors.location}</LabelError>
              ) : (
                ""
              )}
              <LocationInput
                value={formik.values.location}
                defaultValue={""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={"text"}
                name="location"
                placeholder="masalan: Toshkent"
                required
              />

              <LabelTitle>{t("local.place")}</LabelTitle>
              {formik.touched.geolocation && formik.errors.geolocation ? (
                <LabelError>{formik.errors.geolocation}</LabelError>
              ) : (
                ""
              )}
              <LocationInput
                value={formik.values.geolocation}
                defaultValue={""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={"text"}
                name="geolocation"
                placeholder="masalan: Buhoro"
                required
              />

              <WrapSwitch>
                <SwitchTitle>{t("again.status")}</SwitchTitle>
                <SwitchTable status={true} />
              </WrapSwitch>
            </WrapInformation>

            <WrapInformation>
              <LabelTitle>{t("local.text")}</LabelTitle>
              {formik.touched.destination && formik.errors.destination ? (
                <LabelError>{formik.errors.destination}</LabelError>
              ) : (
                ""
              )}
              <Textarea
                value={formik.values.destination}
                defaultValue={""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={"text"}
                name="destination"
                placeholder="info..."
                required
              />

              <AddorEditBtn type="submit">
                {!idForEdit ? t("again.add") : t("again.edit")}
              </AddorEditBtn>
            </WrapInformation>
          </LocationFormInner>
        </DialogContent>
      </CotegorForm>
    </>
  );
};
