import { useTranslation } from "react-i18next";
import { TechnologyFormBox } from "./containers/TechnologyFormBox";
import TechnologyTable from "./containers/TechnologyTable";
import { PostBtn } from "./containers/TechnologyStyle";
import { useTechnology } from "../../context/TechnologyContex";

export const Technology = () => {
  const setIsOpenModal = useTechnology((state) => state?.setIsOpenModal);
  const setIdForEdit = useTechnology((state) => state?.setIdForEdit);
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
