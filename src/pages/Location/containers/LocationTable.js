import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ModalForDelete } from "../../../components/ModalForDelete";
import ReusableTable from "../../../components/shared/Table/Tabele";
import { getElementServices } from "../../../services/ServicesGenerator";
import {
  DeleteIcon,
  EditIcon,
  LocationImg,
} from "../../../assets/images/Icons";
import { DeleteBtn, EditBtn } from "./LocationTableStyle";

export const LocationTable = ({ setEeditId, setModal }) => {
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const [deleteNumId, setDeleteNumId] = useState("");
  const { t } = useTranslation();
  const [Location, setLocation] = useState([]);

  useEffect(() => {
    getElementServices("/address", setLocation);
  }, []);

  const columns = [
    { id: "locatin", label: t("local.address"), width: "22%", align: "center" },
    {
      id: "text",
      label: t("local.text"),
      width: "22%",
      align: "center",
    },
    {
      id: "place",
      label: t("local.place"),
      width: "10%",
      align: "center",
    },
    { id: "space", label: "", width: "100%" },
    { id: "edit", label: "", width: "" },
    { id: "delete", label: "", width: "" },
  ];

  const rows = Location.map((item) => ({
    locatin: item.location,
    text: item.location,
    id: item.id,
    place: <LocationImg />,
    edit: (
      <EditBtn
        onClick={() => {
          setModal(true);
          setEeditId(item.id);
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
          setisOpenDeleteModal(true);
        }}
      >
        <DeleteIcon />
      </DeleteBtn>
    ),
  }));
  return (
    <>
      <ReusableTable columns={columns} rows={rows} />

      {/* Modal for delete */}
      <ModalForDelete
        isOpen={isOpenDeleteModal}
        setIsOpen={setisOpenDeleteModal}
        whatDelete={"address"}
        deleteId={deleteNumId}
      />
    </>
  );
};

export default LocationTable;
