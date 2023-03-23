import {
  DialogActions,
  DialogContent,
  FormGroup,
  Switch,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteIcon, EditIcon } from "../../assets/images/Icons";
import { Modal } from "../../components/Modal";
import { ModalForDelete } from "../../components/ModalForDelete";
import ReusableTable from "../../components/Table/ReUsefulTabele";
import {
  editElementServices,
  getElementServices,
  postElementServices,
} from "../../services/ServicesGenerator";
import {
  CostumBtn,
  CostumBtnWrap,
  CotegorAddBtn,
  CotegorText,
  CotegorWrapSpan,
  CotegorWrapSwitch,
  CotegoryEditBtn,
  CotegoryForm,
  CotegoryPostBtn,
  CotegoryWrapBtn,
  ExitButton,
} from "./CategoryTableStyle";

export const CategoryTable = () => {
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const [isOpenCategoryModal, setIsOpenCategoryModal] = useState(false);
  const [idForEditCategory, setIdForEditCategory] = useState(false);
  const [deleteNumId, setDeleteNumId] = useState("");
  const { t } = useTranslation();
  const [category, setCategory] = useState([]);

  // Formik
  const formik = useFormik({
    initialValues: {
      category: "",
      isActive: true,
    },
    onSubmit: (values) => {
      const dataType = {
        category: values.category,
        isActive: values.isActive,
      };

      if (idForEditCategory) {
        editElementServices("categories", idForEditCategory, dataType);
      } else {
        postElementServices("categories", dataType);
      }
      window.location.reload(false);
    },
  });

  const { getFieldProps } = formik;

  useEffect(() => {
    getElementServices("/categories", setCategory);
  }, []);

  const columns = [
    {
      id: "category",
      label: t("category.categor"),
      width: "100%",
      align: "start",
    },
    { id: "edit", label: "", width: "" },
    { id: "delete", label: "", width: "" },
  ];

  const rows = category.map((item) => ({
    category: item.category,
    id: item.id,
    edit: (
      <CotegoryEditBtn
        onClick={() => {
          setIsOpenCategoryModal(true);
          setIdForEditCategory(item.id);
        }}
      >
        <EditIcon />
      </CotegoryEditBtn>
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

      <CotegoryWrapBtn>
        <CotegoryPostBtn
          onClick={() => {
            setIsOpenCategoryModal(true);
            setIdForEditCategory("");
          }}
        >
          {t("again.add")}
        </CotegoryPostBtn>
      </CotegoryWrapBtn>

      {/* Modal for delete */}
      <ModalForDelete
        isOpen={isOpenDeleteModal}
        setIsOpen={setisOpenDeleteModal}
        whatDelete={"categories"}
        deleteId={deleteNumId}
      />

      {/* Modal for Add and Edit Category */}
      <Modal
        modal={isOpenCategoryModal}
        setModal={setIsOpenCategoryModal}
        title={!idForEditCategory ? t("again.add") : t("again.edit")}
      >
        <ExitButton onClick={() => setIsOpenCategoryModal(false)} />
        <CotegoryForm onSubmit={formik.handleSubmit}>
          <DialogContent dividers>
            <CotegorText>{t("category.name")}</CotegorText>
            <TextField
              sx={{ marginBottom: "20px" }}
              type="text"
              name="category_name"
              {...getFieldProps("category")}
              onChange={formik.handleChange}
              label="masalan: Model B"
              required
            />
            <CotegorWrapSwitch>
              <CotegorWrapSpan>{t("again.status")}</CotegorWrapSpan>
              <FormGroup>
                <Switch
                  defaultChecked={true}
                  checked={formik.values.isActive}
                  onChange={formik.handleChange}
                  {...getFieldProps("isActive")}
                  color="primary"
                />
              </FormGroup>
            </CotegorWrapSwitch>
          </DialogContent>
          <DialogActions>
            <CotegorAddBtn
              type="submit"
              onClick={() => setIsOpenCategoryModal(false)}
            >
              {!idForEditCategory ? t("again.add") : t("again.edit")}
            </CotegorAddBtn>
          </DialogActions>
        </CotegoryForm>
      </Modal>
    </>
  );
};

export default CategoryTable;
