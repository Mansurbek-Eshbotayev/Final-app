import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteIcon, EditIcon } from "../../../assets/images/Icons";
import { ModalForDelete } from "../../../components/ModalForDelete";
import ReusableTable from "../../../components/shared/Table/Tabele";
import { getElementServices } from "../../../services/ServicesGenerator";
import { DeleteBtn, EditBtn } from "./ProductStyle";
import { useProduct } from "../../../context/ProductContex";
import { SwitchTable } from "../../../components/shared/switch";

export const ProductTable = () => {
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const setIsOpenModal = useProduct((state) => state?.setIsOpenModal);
  const setIdForEdit = useProduct((state) => state?.setIdForEdit);
  const [deleteNumId, setDeleteNumId] = useState("");
  const { t } = useTranslation();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getElementServices("/products", setProduct);
  }, []);

  const columns = [
    {
      id: "name",
      label: t("product.proname"),
      width: "20%",
      align: "center",
    },
    {
      id: "category",
      label: t("product.categor"),
      width: "15%",
      align: "center",
    },
    {
      id: "cost",
      label: t("product.cost"),
      width: "19%",
      align: "center",
    },
    {
      id: "save",
      label: t("product.download"),
      width: "13%",
      align: "center",
    },
    {
      id: "size",
      label: t("product.size"),
      width: "17%",
      align: "center",
    },
    {
      id: "status",
      label: t("product.status"),
      width: "20%",
      align: "center",
    },
    { id: "edit", label: "", width: "" },
    { id: "delete", label: "", width: "" },
  ];

  const rows = product.map((item) => ({
    name: item.name,
    category: item.category,
    cost: `${item.cost} $`,
    save: `${item.weight} kg`,
    size: item.size,
    id: item.id,
    status: <SwitchTable status={true} />,
    edit: (
      <EditBtn
        onClick={() => {
          setIsOpenModal(true);
          setIdForEdit(item.id);
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
        whatDelete={"products"}
        deleteId={deleteNumId}
      />
    </>
  );
};

export default ProductTable;
