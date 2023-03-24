import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteIcon, EditIcon } from "../../assets/images/Icons";
import { GlobalTechnologyModal } from "../../assets/styles/AppGlobalCss";
import { Modal } from "../../components/Modal";
import { ModalForDelete } from "../../components/ModalForDelete";
import ReusableTable from "../../components/shared/Table/Tabele";
import { DialogActions, DialogContent, FormGroup, Switch } from "@mui/material";
import {
  editElementServices,
  getElementServices,
  postElementServices,
} from "../../services/ServicesGenerator";
import {
  CostumBtn,
  CostumBtnWrap,
  CotegorAddBtn,
  CotegorForm,
  CotegorFormInner,
  CotegorWrapSpan,
  CotegorWrapSwitch,
  CotegoryEditBtn,
  CotegoryPostBtn,
  CotegoryWrapBtn,
  ExitButton,
  ProductDivOne,
  ProductDivTwoInput,
  ProductDivTwoLabel,
  WrapperSwitch,
} from "./TechnologyTableStyle";

export const TechnologyTable = () => {
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const [isOpenTechnologyModal, setIsOpenTechnologyModal] = useState(false);
  const [idForEditTechnology, setIdForEditTechnology] = useState(false);
  const [deleteNumId, setDeleteNumId] = useState("");
  const { t } = useTranslation();
  const [technology, setTechnology] = useState([]);
  console.log(technology);

  // Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      thumbnail: "",
      link: "",
      description: "",
      isActive: true,
    },
    onSubmit: (values) => {
      const dataType = {
        name: values.name,
        thumbnail: values.thumbnail,
        link: values.link,
        description: values.description,
        isActive: values.isActive,
      };

      if (idForEditTechnology) {
        editElementServices("technology", idForEditTechnology, dataType);
      } else {
        postElementServices("technology", dataType);
      }
      window.location.reload(false);
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Name is Required";
      }

      if (!values.description) {
        errors.description = "Description is Required";
      }

      if (!values.thumbnail) {
        errors.thumbnail = "Thumbnail is Required";
      }

      if (!values.link) {
        errors.link = "Link is Required";
      }
      return errors;
    },
  });

  const { getFieldProps } = formik;

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
      <CotegoryEditBtn
        onClick={() => {
          setIsOpenTechnologyModal(true);
          setIdForEditTechnology(item.id);
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
            setIsOpenTechnologyModal(true);
            setIdForEditTechnology("");
          }}
        >
          {t("again.add")}
        </CotegoryPostBtn>
      </CotegoryWrapBtn>

      {/* Modal for delete */}
      <ModalForDelete
        isOpen={isOpenDeleteModal}
        setIsOpen={setisOpenDeleteModal}
        whatDelete={"technology"}
        deleteId={deleteNumId}
      />

      {/* Modal for Add and Edit technology */}
      <Modal
        sx={{ width: 515 }}
        modal={isOpenTechnologyModal}
        setModal={setIsOpenTechnologyModal}
        title={!idForEditTechnology ? t("again.add") : t("again.edit")}
      >
        <ExitButton onClick={() => setIsOpenTechnologyModal(false)} />
        <CotegorForm onSubmit={formik.handleSubmit}>
          <DialogContent
            dividers
            sx={{ paddingBottom: "20px", overflowX: "hidden" }}
          >
            <CotegorFormInner>
              <ProductDivOne>
                <ProductDivTwoLabel htmlFor="name">
                  {t("techno.name")}
                </ProductDivTwoLabel>
                <ProductDivTwoInput
                  value={formik.values.name}
                  defaultValue={""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="name"
                  type={"text"}
                  name="name"
                  placeholder={
                    formik.touched.name && formik.errors.name
                      ? `${formik.errors.name}`
                      : "masalan: Memoriform"
                  }
                  required
                />

                <ProductDivTwoLabel htmlFor="description">
                  {t("techno.text")}
                </ProductDivTwoLabel>
                <ProductDivTwoInput
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="description"
                  type={"text"}
                  name="description"
                  placeholder={
                    formik.touched.description && formik.errors.description
                      ? `${formik.errors.description}`
                      : "masalan: Memoriform"
                  }
                  required
                />
              </ProductDivOne>

              <ProductDivOne>
                <ProductDivTwoLabel htmlFor="thumbnail">
                  {t("techno.picture")}
                </ProductDivTwoLabel>
                <ProductDivTwoInput
                  value={formik.values.thumbnail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="thumbnail"
                  type={"text"}
                  name="thumbnail"
                  placeholder={
                    formik.touched.thumbnail && formik.errors.thumbnail
                      ? `${formik.errors.thumbnail}`
                      : "masalan: Video code"
                  }
                  required
                />

                <ProductDivTwoLabel htmlFor="link">
                  {t("techno.video")}
                </ProductDivTwoLabel>
                <ProductDivTwoInput
                  value={formik.values.link}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="link"
                  type={"text"}
                  name="link"
                  placeholder={
                    formik.touched.link && formik.errors.link
                      ? `${formik.errors.link}`
                      : "masalan: Video code"
                  }
                  required
                />
              </ProductDivOne>
            </CotegorFormInner>
          </DialogContent>

          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <WrapperSwitch>
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
            </WrapperSwitch>

            <WrapperSwitch>
              <CotegorAddBtn type="submit">
                {!idForEditTechnology ? t("again.add") : t("again.edit")}
              </CotegorAddBtn>
            </WrapperSwitch>
          </DialogActions>
        </CotegorForm>
        <GlobalTechnologyModal />
      </Modal>
    </>
  );
};

export default TechnologyTable;
