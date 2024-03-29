import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SwitchTable } from "../../../components/shared/switch";
import MaterialTable from "../../../components/shared/Table/Tabele";
import useSearchStore from "../../../context/CreateZustand";
import {
  getElementServices,
  searchElementServices,
} from "../../../services/ServicesGenerator";

export const OrderTable = () => {
  const { t } = useTranslation();
  const [orders, setOrders] = useState([]);
  const [orders1, setOrders1] = useState([]);
  const searchValue = useSearchStore((state) => state.searchValue);

  // search orders
  useEffect(() => {
    searchElementServices(searchValue, setOrders1);
  }, [searchValue]);
  // get orders
  useEffect(() => {
    getElementServices("orders/1", setOrders);
  }, []);

  const columns = [
    { id: "id", label: t("order.id"), width: "auto", align: "center" },
    { id: "name", label: t("order.name"), width: "auto", align: "center" },
    { id: "phone", label: t("order.phone"), width: "auto", align: "center" },
    {
      id: "product",
      label: t("order.product"),
      width: "auto",
      align: "center",
    },
    { id: "amount", label: t("order.amount"), width: "auto", align: "center" },
    { id: "call", label: t("order.call"), width: "auto", align: "center" },
  ];

  const resulrt = searchValue ? [orders1] : orders;

  const rows = resulrt.map((item) => ({
    id: item.id,
    name: item.name,
    product: item.product_name,
    amount: item.count,
    phone: item.number,
    call: <SwitchTable status={true} />,
  }));
  return (
    <>
      <MaterialTable columns={columns} rows={rows} />
    </>
  );
};

export default OrderTable;
