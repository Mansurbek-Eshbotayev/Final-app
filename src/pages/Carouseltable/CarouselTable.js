import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteIcon, EditIcon } from "../../assets/images/Icons";
import { Modal } from "../../components/Modal";
import { ModalForDelete } from "../../components/ModalForDelete";
import ReusableTable from "../../components/Table/ReUsefulTabele";
import {
  DialogActions,
  DialogContent,
  FormGroup,
  Switch,
  TextField,
} from "@mui/material";
import {
  editElementServices,
  getElementServices,
  postElementServices,
} from "../../services/ServicesGenerator";
import {
  CarouselLabelImg,
  CarouselLabelOneSpan,
  CarouselLabelTwoSpan,
  CarouselWrap,
  CarouselWrapInput,
  CarouselWrapLabel,
  CarouselWrapLabelTwoDiv,
  CostumBtn,
  CostumBtnWrap,
  CotegorAddBtn,
  CotegorForm,
  CotegorText,
  CotegorWrapSpan,
  CotegorWrapSwitch,
  CotegoryEditBtn,
  CotegoryPostBtn,
  CotegoryWrapBtn,
  ExitButton,
} from "./CarouselTableStyle";

export const CarouselTable = () => {
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const [isOpenCarouselModal, setIsOpenCarouselModal] = useState(false);
  const [idForEditCarousel, setIdForEditCarousel] = useState(false);
  const [labelImg, setLabelImg] = useState("");
  const [deleteNumId, setDeleteNumId] = useState("");
  const { t } = useTranslation();
  const [carousel, setCarousel] = useState([]);
  console.log(carousel);

  // Formik
  const formik = useFormik({
    initialValues: {
      title: "",
      image: null,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("image", values.image);

      if (idForEditCarousel) {
        editElementServices("carousel", idForEditCarousel, formData);
      } else {
        postElementServices("carousel", formData);
      }
      window.location.reload(false);
    },
  });

  const { getFieldProps } = formik;

  useEffect(() => {
    getElementServices("/carousel", setCarousel);
  }, []);

  const columns = [
    {
      id: "id",
      label: t("carousel.id"),
      width: "5%",
      align: "center",
    },
    { id: "title", label: t("carousel.title"), width: "35%", align: "center" },
    {
      id: "image",
      label: t("carousel.picture"),
      width: "30%",
      align: "center",
    },
    {
      id: "status",
      label: t("carousel.status"),
      width: "25%",
      align: "center",
    },
    { id: "edit", label: "", width: "" },
    { id: "delete", label: "", width: "" },
  ];

  const rows = carousel.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    status: (
      <Switch
        sx={{ textAlign: "center" }}
        defaultChecked={true}
        color="primary"
        onChange={(defaultChecked) => {
          defaultChecked = !defaultChecked;
        }}
      />
    ),
    edit: (
      <CotegoryEditBtn
        onClick={() => {
          setIsOpenCarouselModal(true);
          setIdForEditCarousel(item.id);
          setLabelImg(item.image);
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
            setIsOpenCarouselModal(true);
            setIdForEditCarousel("");
          }}
        >
          {t("again.add")}
        </CotegoryPostBtn>
      </CotegoryWrapBtn>

      {/* Modal for delete */}
      <ModalForDelete
        isOpen={isOpenDeleteModal}
        setIsOpen={setisOpenDeleteModal}
        whatDelete={"carousel"}
        deleteId={deleteNumId}
      />

      {/* Modal for Add and Edit carousel */}
      <Modal
        modal={isOpenCarouselModal}
        setModal={setIsOpenCarouselModal}
        title={!idForEditCarousel ? t("again.add") : t("again.edit")}
      >
        <ExitButton onClick={() => setIsOpenCarouselModal(false)} />
        <CotegorForm onSubmit={formik.handleSubmit}>
          <DialogContent dividers>
            <CotegorText>
              {!idForEditCarousel
                ? t("carousel.forname")
                : t("carousel.newforname")}
            </CotegorText>
            <TextField
              sx={{ marginBottom: "40px", width: "100%" }}
              type="text"
              name="title"
              {...getFieldProps("title")}
              onChange={formik.handleChange}
              label="Masalan: Kechalari sokin dam oling"
              required
            />

            <CarouselWrap>
              {idForEditCarousel ? (
                <CarouselWrapLabelTwoDiv>
                  <CarouselLabelImg
                    src={`http://localhost:1212/carousel/${labelImg}`}
                    alt="Matras"
                  />

                  <CarouselLabelTwoSpan>
                    {t("carousel.old")}
                  </CarouselLabelTwoSpan>
                </CarouselWrapLabelTwoDiv>
              ) : (
                ""
              )}

              <CarouselWrapLabel>
                <CarouselWrapInput
                  type="file"
                  name="image"
                  placeholder="add img"
                  accept="image/*"
                  onChange={(e) => {
                    formik.setFieldValue("image", e.currentTarget.files[0]);
                  }}
                  required
                />
                <CarouselLabelOneSpan>{t("carousel.new")}</CarouselLabelOneSpan>
              </CarouselWrapLabel>
            </CarouselWrap>

            <CotegorWrapSwitch>
              <CotegorWrapSpan>{t("carousel.status")}</CotegorWrapSpan>
              <FormGroup>
                <Switch defaultChecked={true} color="primary" />
              </FormGroup>
            </CotegorWrapSwitch>
          </DialogContent>
          <DialogActions>
            <CotegorAddBtn
              type="submit"
              onClick={() => setIsOpenCarouselModal(false)}
            >
              {!idForEditCarousel ? t("again.add") : t("again.edit")}
            </CotegorAddBtn>
          </DialogActions>
        </CotegorForm>
      </Modal>
    </>
  );
};

export default CarouselTable;
