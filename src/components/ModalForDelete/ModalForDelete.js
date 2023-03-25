import { DialogContent } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { GlobalDeletModal } from "../../assets/styles/AppGlobalCss";
import useDeleteModalStore from "../../context/OpenDeleteContex";
import { deleteItem } from "../../services/ServicesGenerator";
import { Modal } from "../Modal";
import {
  DeleteButton,
  DeleteSecondForm,
  EditButton,
} from "./ModalForDeleteStyle";

export const ModalForDelete = ({ whatDelete, deleteId }) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useDeleteModalStore(
    (state) => [state.isOpenDeleteModal, state.setIsOpenDeleteModal]
  );
  const { t } = useTranslation();
  return (
    <>
      <Modal
        modal={isOpenDeleteModal}
        setModal={setIsOpenDeleteModal}
        title={t("delete.realy")}
      >
        <DeleteSecondForm onSubmit={() => deleteItem(whatDelete, deleteId)}>
          <DialogContent
            dividers
            sx={{ width: "124%", display: "flex", justifyContent: "flex-end" }}
          >
            <EditButton
              type="button"
              onClick={() => setIsOpenDeleteModal(false)}
            >
              {t("delete.no")}
            </EditButton>

            <DeleteButton
              type="submit"
              onClick={() => {
                setIsOpenDeleteModal(false);
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
