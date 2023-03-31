import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteIcon } from "../../../assets/images/Icons";
import { DeleteBtn } from "../../../assets/styles/AppStyle";
import { ModalForDelete } from "../../../components/ModalForDelete";
import { SwitchTable } from "../../../components/shared/switch";
import ReusableTable from "../../../components/shared/Table/Tabele";
import { getElementServices } from "../../../services/ServicesGenerator";

export const CustomerTable = () => {
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const [deleteNumId, setDeleteNumId] = useState("");
  const { t } = useTranslation();
  const [client, setClient] = useState([]);

  useEffect(() => {
    getElementServices("/contact/1", setClient);
  }, []);

  const columns = [
    { id: "id", label: t("client.id"), width: 80, align: "center" },
    { id: "date", label: t("client.date"), width: 170, align: "center" },
    { id: "phone", label: t("client.phone"), width: 210, align: "center" },
    { id: "call", label: t("client.call"), width: 130, align: "center" },
    { id: "", width: 580 },
    { id: "delete", label: "", width: "" },
  ];

  const rows = client.map((item) => ({
    id: item.id,
    date: item.time,
    phone: item.number,
    call: <SwitchTable status={true} />,
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
        whatDelete={"contact"}
        deleteId={deleteNumId}
      />
    </>
  );
};

export default CustomerTable;
