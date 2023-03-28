import { useTranslation } from "react-i18next";
import CarouselTable from "./containers/CarouselTable";
import { useCarousel } from "../../context/CarouselContex";
import { PostBtn } from "./containers/CarouselStyle";
import { CarouselFormBox } from "./containers/CarouselFormBox";

export const Carousel = () => {
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
};
