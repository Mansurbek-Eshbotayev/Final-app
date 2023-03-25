import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LocationForm } from "./containers/LocationForm";
import LocationTable from "./containers/LocationTable";
import { PostBtn } from "./containers/LocationTableStyle";

export const Location = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idForEdit, setIdForEdit] = useState("");
  const { t } = useTranslation();

  return (
    <>
      <LocationTable setEeditId={setIdForEdit} setModal={setIsOpenModal} />

      <PostBtn
        onClick={() => {
          setIsOpenModal(true);
          setIdForEdit("");
        }}
      >
        {t("again.add")}
      </PostBtn>

      <LocationForm
        modal={isOpenModal}
        setModal={setIsOpenModal}
        editId={idForEdit}
      />
    </>
  );
};
