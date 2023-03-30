import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteIcon, EditIcon } from "../../../assets/images/Icons";
import { ModalForDelete } from "../../../components/ModalForDelete";
import ReusableTable from "../../../components/shared/Table/Tabele";
import { getElementServices } from "../../../services/ServicesGenerator";
import { DeleteBtn, EditBtn } from "./CarouselStyle";
import { CarouselFormBox } from "./CarouselFormBox";
import { useCarousel } from "../../../context/CarouselContex";
import { SwitchTable } from "../../../components/shared/switch";

export const CarouselTable = () => {
  const setIsOpenModal = useCarousel((state) => state?.setIsOpenModal);
  const setIdForEdit = useCarousel((state) => state?.setIdForEdit);
  const setOldImg = useCarousel((state) => state?.setOldImg);
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const [deleteNumId, setDeleteNumId] = useState("");
  const { t } = useTranslation();
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    getElementServices("/carousel", setCarousel);
  }, []);

  const columns = [
    {
      id: "id",
      label: t("carousel.id"),
      width: "5%",
      align: "center",
    },
    { id: "title", label: t("carousel.title"), width: "35%", align: "center" },
    {
      id: "image",
      label: t("carousel.picture"),
      width: "30%",
      align: "center",
    },
    {
      id: "status",
      label: t("carousel.status"),
      width: "25%",
      align: "center",
    },
    { id: "edit", label: "", width: "" },
    { id: "delete", label: "", width: "" },
  ];

  const rows = carousel.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    status: <SwitchTable status={true} />,
    edit: (
      <EditBtn
        onClick={() => {
          setIsOpenModal(true);
          setIdForEdit(item.id);
          setOldImg(item.image);
        }}
      >
        <EditIcon />
      </EditBtn>
    ),
    delete: (
      <DeleteBtn
        sx={{ textAlign: "end" }}
        onClick={() => {
          setDeleteNumId(item.id);
          setIsOpenModal(true);
        }}
      >
        <DeleteIcon />
      </DeleteBtn>
    ),
  }));
  return (
    <>
      <ReusableTable columns={columns} rows={rows} />
      <CarouselFormBox />
      {/* Modal for delete */}
      <ModalForDelete
        isOpen={isOpenDeleteModal}
        setIsOpen={setisOpenDeleteModal}
        whatDelete={"carousel"}
        deleteId={deleteNumId}
      />
    </>
  );
};

export default CarouselTable;
