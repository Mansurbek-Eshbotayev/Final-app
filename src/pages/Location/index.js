import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "../../context/LocationContex";
import { LocationForm, LocationFormBox } from "./containers/LocationFormBox";
import LocationTable from "./containers/LocationTable";
import { PostBtn } from "./containers/LocationTableStyle";

export const Location = () => {
  const setIsOpenModal = useLocation((state) => state?.setIsOpenModal);
  const setIdForEdit = useLocation((state) => state?.setIdForEdit);
  const { t } = useTranslation();

  return (
    <>
      <LocationTable />

      <PostBtn
        onClick={() => {
          setIsOpenModal(true);
          setIdForEdit("");
        }}
      >
        {t("again.add")}
      </PostBtn>

      <LocationFormBox />
    </>
  );
};
