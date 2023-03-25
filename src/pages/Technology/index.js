import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TechnologyForm } from "./containers/TechnologyForm";
import TechnologyTable from "./containers/TechnologyTable";
import { PostBtn } from "./containers/TechnologyStyle";

export const Technology = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idForEdit, setIdForEdit] = useState("");
  const { t } = useTranslation();

  return (
    <>
      <TechnologyTable setEeditId={setIdForEdit} setModal={setIsOpenModal} />

      <PostBtn
        onClick={() => {
          setIsOpenModal(true);
          setIdForEdit("");
        }}
      >
        {t("again.add")}
      </PostBtn>

      <TechnologyForm
        modal={isOpenModal}
        setModal={setIsOpenModal}
        editId={idForEdit}
      />
    </>
  );
};
