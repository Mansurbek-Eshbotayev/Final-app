import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteIcon } from "../../assets/images/Icons";
import { ModalForDelete } from "../../components/ModalForDelete";
import ReusableTable from "../../components/Table/ReUsefulTabele";
import { getElementServices } from "../../services/ServicesGenerator";
import { CostumBtn, CostumBtnWrap } from "./CustomerTableStyle";

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
    { id: "delete", label: "", width: "" },
  ];

  const rows = client.map((item) => ({
    id: item.id,
    date: item.time,
    phone: item.number,
    call: (
      <Switch
        sx={{ textAlign: "center" }}
        defaultChecked={true}
        color="primary"
        onChange={(defaultChecked) => {
          defaultChecked = !defaultChecked;
        }}
      />
    ),
    delete: (
      <CostumBtnWrap>
        <CostumBtn
          sx={{ textAlign: "end" }}
          onClick={() => {
            setDeleteNumId(item.id);
            setisOpenDeleteModal(true);
          }}
        >
          <DeleteIcon />
        </CostumBtn>
      </CostumBtnWrap>
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
