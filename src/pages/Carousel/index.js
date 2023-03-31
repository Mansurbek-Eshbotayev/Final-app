import { useTranslation } from "react-i18next";
import { PostBtn } from "../../assets/styles/AppStyle";
import { useCarousel } from "../../context/CarouselContex";
import { CarouselFormBox } from "./containers/CarouselFormBox/CarouselFormBox";
import { CarouselTable } from "./containers/CarouselTable";

function Carousel() {
  const setIsOpenModal = useCarousel((state) => state?.setIsOpenModal);
  const setIdForEdit = useCarousel((state) => state?.setIdForEdit);
  const { t } = useTranslation();

  return (
    <>
      <CarouselTable />

      <PostBtn
        onClick={() => {
          setIsOpenModal(true);
          setIdForEdit("");
        }}
      >
        {t("again.add")}
      </PostBtn>

      <CarouselFormBox />
    </>
  );
}

export default Carousel;
