import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteIcon, EditIcon } from "../../../assets/images/Icons";
import { ModalForDelete } from "../../../components/ModalForDelete";
import MaterialTable from "../../../components/shared/Table/Tabele";
import { getElementServices } from "../../../services/ServicesGenerator";
import { DeleteBtn, EditBtn } from "./TechnologyStyle";

export const TechnologyTable = ({ setEeditId, setModal }) => {
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const [deleteNumId, setDeleteNumId] = useState("");
  const { t } = useTranslation();
  const [technology, setTechnology] = useState([]);
  console.log(technology);

  useEffect(() => {
    getElementServices("/technology", setTechnology);
  }, []);

  const columns = [
    {
      id: "name",
      label: t("techno.names"),
      width: "18%",
      align: "center",
    },
    { id: "id", label: t("techno.id"), width: "20%", align: "center" },
    { id: "video", label: t("techno.video"), width: "15%", align: "center" },
    { id: "", label: "", width: "100%", align: "center" },
    { id: "edit", label: "", width: "" },
    { id: "delete", label: "", width: "" },
  ];

  const rows = technology.map((item) => ({
    name: item.name,
    id: item.id,
    video: item.link,
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
      <MaterialTable columns={columns} rows={rows} />

      {/* Modal for delete */}
      <ModalForDelete
        isOpen={isOpenDeleteModal}
        setIsOpen={setisOpenDeleteModal}
        whatDelete={"technology"}
        deleteId={deleteNumId}
      />
    </>
  );
};

export default TechnologyTable;
