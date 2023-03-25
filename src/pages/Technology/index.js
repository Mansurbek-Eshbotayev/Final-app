import { useTranslation } from "react-i18next";
import { TechnologyFormBox } from "./containers/TechnologyFormBox";
import TechnologyTable from "./containers/TechnologyTable";
import { PostBtn } from "./containers/TechnologyStyle";
import { useEditStore, useModalStore } from "../../context/TechnologyContex";

export const Technology = () => {
  const setIsOpenModal = useModalStore((state) => state?.setIsOpenModal);
  const setIdForEdit = useEditStore((state) => state?.setIdForEdit);
  const { t } = useTranslation();

  return (
    <>
      <TechnologyTable />

      <PostBtn
        onClick={() => {
          setIsOpenModal(true);
          setIdForEdit("");
        }}
      >
        {t("again.add")}
      </PostBtn>

      <TechnologyFormBox />
    </>
  );
};
