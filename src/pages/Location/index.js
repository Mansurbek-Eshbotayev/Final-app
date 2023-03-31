import { useTranslation } from "react-i18next";
import { PostBtn } from "../../assets/styles/AppStyle";
import { useLocation } from "../../context/LocationContex";
import { LocationFormBox } from "./containers/LocationFormBox/LocationFormBox";
import LocationTable from "./containers/LocationTable/LocationTable";

function Location() {
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
}

export default Location;
