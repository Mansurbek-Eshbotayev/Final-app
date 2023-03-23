import { DialogContent } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { GlobalDeletModal } from "../../assets/styles/AppGlobalCss";
import { deleteItem } from "../../services/ServicesGenerator";
import { Modal } from "../Modal";
import {
  DeleteButton,
  DeleteSecondForm,
  EditButton,
} from "./ModalForDeleteStyle";

export const ModalForDelete = ({ isOpen, setIsOpen, whatDelete, deleteId }) => {
  const { t } = useTranslation();
  return (
    <>
      <Modal modal={isOpen} setModal={setIsOpen} title={t("delete.realy")}>
        <DeleteSecondForm onSubmit={() => deleteItem(whatDelete, deleteId)}>
          <DialogContent
            dividers
            sx={{ width: "124%", display: "flex", justifyContent: "flex-end" }}
          >
            <EditButton type="button" onClick={() => setIsOpen(false)}>
              {t("delete.no")}
            </EditButton>

            <DeleteButton
              type="submit"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t("delete.yes")}
            </DeleteButton>
          </DialogContent>
        </DeleteSecondForm>
        <GlobalDeletModal />
      </Modal>
    </>
  );
};
