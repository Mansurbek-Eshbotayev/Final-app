import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteIcon, EditIcon, LocationImg } from "../../assets/images/Icons";
import { Modal } from "../../components/Modal";
import { ModalForDelete } from "../../components/ModalForDelete";
import ReusableTable from "../../components/Table/ReUsefulTabele";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { DialogContent, FormGroup, Switch } from "@mui/material";
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
  CotegorWrapSpan,
  CotegorWrapSwitch,
  CotegoryEditBtn,
  CotegoryPostBtn,
  CotegoryWrapBtn,
  ExitButton,
  LocationFormInner,
  LocationDivOne,
  LocationOneWrapImg,
  LocationOneWrapImgLabel,
  LocationOneWrapImgInput,
  ProductDivTwo,
  LocationDivTwoLabel,
  LocationDivTwoLabelspace,
  LocationDivTwoInput,
  ProductDivFour,
  LocationDiv,
  LocationDivTwoTextarea,
  LocationNewDivTwoInput,
} from "./LocationTableStyle";
import { GlobalLocationModal } from "../../assets/styles/AppGlobalCss";

export const LocationTable = () => {
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const [isOpenLocationModal, setIsOpenLocationModal] = useState(false);
  const [idForEditLocation, setIdForEditLocation] = useState(false);
  const [deleteNumId, setDeleteNumId] = useState("");
  const { t } = useTranslation();
  const [Location, setLocation] = useState([]);

  // Formik
  const formik = useFormik({
    initialValues: {
      location: "",
      geolocation: "",
      images: "",
      destination: "",
      isActive: true,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("location", values.location);
      formData.append("geolocation", values.geolocation);
      formData.append("images", values.images);
      formData.append("destination", values.destination);
      formData.append("isActive", values.isActive);

      if (idForEditLocation) {
        editElementServices("address", idForEditLocation, formData);
      } else {
        postElementServices("address", formData);
      }
      window.location.reload(false);
    },
    validate: (values) => {
      let errors = {};

      if (!values.location) {
        errors.location = "Manzil is Required";
      }

      if (!values.geolocation) {
        errors.geolocation = "Location is Required";
      }

      if (!values.destination) {
        errors.destination = "Description is Required";
      }

      return errors;
    },
  });

  const { getFieldProps } = formik;

  useEffect(() => {
    getElementServices("/address", setLocation);
  }, []);

  const columns = [
    { id: "locatin", label: t("local.address"), width: "22%", align: "center" },
    {
      id: "text",
      label: t("local.text"),
      width: "22%",
      align: "center",
    },
    {
      id: "place",
      label: t("local.place"),
      width: "10%",
      align: "center",
    },
    { id: "space", label: "", width: "100%" },
    { id: "edit", label: "", width: "" },
    { id: "delete", label: "", width: "" },
  ];

  const rows = Location.map((item) => ({
    locatin: item.location,
    text: item.location,
    id: item.id,
    place: <LocationImg />,

    edit: (
      <CotegoryEditBtn
        onClick={() => {
          setIsOpenLocationModal(true);
          setIdForEditLocation(item.id);
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
            setIsOpenLocationModal(true);
            setIdForEditLocation("");
          }}
        >
          {t("again.add")}
        </CotegoryPostBtn>
      </CotegoryWrapBtn>

      {/* Modal for delete */}
      <ModalForDelete
        isOpen={isOpenDeleteModal}
        setIsOpen={setisOpenDeleteModal}
        whatDelete={"address"}
        deleteId={deleteNumId}
      />

      {/* Modal for Add and Edit Location */}
      <Modal
        sx={{ width: 815 }}
        modal={isOpenLocationModal}
        setModal={setIsOpenLocationModal}
        title={!idForEditLocation ? t("again.add") : t("again.edit")}
      >
        <ExitButton onClick={() => setIsOpenLocationModal(false)} />
        <CotegorForm onSubmit={formik.handleSubmit}>
          <DialogContent dividers sx={{ paddingBottom: "40px" }}>
            <LocationFormInner>
              <LocationDivOne>
                <LocationOneWrapImg>
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <LocationOneWrapImgLabel>
                        <LocationOneWrapImgInput
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "images",
                              e.currentTarget.files[0]
                            );
                          }}
                          placeholder="edd img"
                        />
                      </LocationOneWrapImgLabel>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                          <ProductOneWrapImgLabel>
                            <ProductOneWrapImgInput
                              type="file"
                              placeholder="edd img"
                              accept="image/*"
                              onChange={(e) => {
                                formik.setFieldValue(
                                  "images1",
                                  e.currentTarget.files[0]
                                );
                              }}
                            />
                          </ProductOneWrapImgLabel>
                        </SwiperSlide>
                        <SwiperSlide>
                          <ProductOneWrapImgLabel>
                            <ProductOneWrapImgInput
                              type="file"
                              placeholder="edd img"
                              accept="image/*"
                              onChange={(e) => {
                                formik.setFieldValue(
                                  "images2",
                                  e.currentTarget.files[0]
                                );
                              }}
                              required
                            />
                          </ProductOneWrapImgLabel>
                        </SwiperSlide> */}
                  </Swiper>
                </LocationOneWrapImg>
              </LocationDivOne>

              <ProductDivTwo>
                <LocationDivTwoLabel>{t("local.address")}</LocationDivTwoLabel>
                <LocationNewDivTwoInput
                  value={formik.values.location}
                  defaultValue={""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type={"text"}
                  name="location"
                  placeholder={
                    formik.touched.location && formik.errors.location
                      ? `${formik.errors.location}`
                      : "masalan: Toshkent"
                  }
                  required
                />

                <LocationDivTwoLabelspace>
                  {t("local.place")}
                </LocationDivTwoLabelspace>
                <LocationDivTwoInput
                  value={formik.values.geolocation}
                  defaultValue={""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type={"text"}
                  name="geolocation"
                  placeholder={
                    formik.touched.geolocation && formik.errors.geolocation
                      ? `${formik.errors.geolocation}`
                      : "masalan: Buhoro"
                  }
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
              </ProductDivTwo>

              <ProductDivFour>
                <LocationDiv>{t("local.text")}</LocationDiv>

                <LocationDivTwoTextarea
                  value={formik.values.destination}
                  defaultValue={""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type={"text"}
                  name="destination"
                  placeholder={
                    formik.touched.destination && formik.errors.destination
                      ? `${formik.errors.destination}`
                      : "info..."
                  }
                  required
                />

                <CotegorAddBtn type="submit">
                  {!idForEditLocation ? t("again.add") : t("again.edit")}
                </CotegorAddBtn>
              </ProductDivFour>
            </LocationFormInner>
          </DialogContent>
        </CotegorForm>
        <GlobalLocationModal />
      </Modal>
    </>
  );
};

export default LocationTable;
