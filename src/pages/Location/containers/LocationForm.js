import { DialogContent } from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { GlobalLocationModal } from "../../../assets/styles/AppGlobalCss";
import { Modal } from "../../../components/Modal";
import { SwitchTable } from "../../../components/shared/switch";
import {
  editElementServices,
  postElementServices,
} from "../../../services/ServicesGenerator";
import {
  AddorEditBtn,
  CotegorForm,
  ExitButton,
  LabelTitle,
  LocationFormInner,
  LocationImgInput,
  LocationInput,
  LocationLabelWrapImg,
  SwitchTitle,
  Textarea,
  WrapInformation,
  WrapSwitch,
} from "./LocationTableStyle";

export const LocationForm = ({ modal, setModal, editId }) => {
  const { t } = useTranslation();

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

      if (editId) {
        editElementServices("address", editId, formData);
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

  return (
    <>
      <Modal
        sx={{ width: 815 }}
        modal={modal}
        setModal={setModal}
        title={!editId ? t("again.add") : t("again.edit")}
      >
        <ExitButton onClick={() => setModal(false)} />
        <CotegorForm onSubmit={formik.handleSubmit}>
          <DialogContent dividers sx={{ paddingBottom: "40px" }}>
            <LocationFormInner>
              <LocationLabelWrapImg>
                <LocationImgInput
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    formik.setFieldValue("images", e.currentTarget.files[0]);
                  }}
                  placeholder="edd img"
                />
              </LocationLabelWrapImg>

              <WrapInformation>
                <LabelTitle>{t("local.address")}</LabelTitle>
                <LocationInput
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

                <LabelTitle>{t("local.place")}</LabelTitle>
                <LocationInput
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

                <WrapSwitch>
                  <SwitchTitle>{t("again.status")}</SwitchTitle>
                  <SwitchTable status={true} />
                </WrapSwitch>
              </WrapInformation>

              <WrapInformation>
                <LabelTitle>{t("local.text")}</LabelTitle>
                <Textarea
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

                <AddorEditBtn type="submit">
                  {!editId ? t("again.add") : t("again.edit")}
                </AddorEditBtn>
              </WrapInformation>
            </LocationFormInner>
          </DialogContent>
        </CotegorForm>
        <GlobalLocationModal />
      </Modal>
    </>
  );
};
