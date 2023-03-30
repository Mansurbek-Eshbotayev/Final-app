import { DialogContent } from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { GlobalLocationModal } from "../../../assets/styles/AppGlobalCss";
import { Modal } from "../../../components/Modal";
import { SwitchTable } from "../../../components/shared/switch";
import { useLocation } from "../../../context/LocationContex";
import {
  editElementServices,
  postElementServices,
} from "../../../services/ServicesGenerator";
import { FormLocation } from "../components/FormLocation";
import { LocationSchema } from "../models/LocationSchema";
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

export const LocationFormBox = () => {
  const idForEdit = useLocation((state) => state?.idForEdit);
  const [isOpenModal, setIsOpenModal] = useLocation((state) => [
    state.isOpenModal,
    state.setIsOpenModal,
  ]);
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

      if (idForEdit) {
        editElementServices("address", idForEdit, formData);
      } else {
        postElementServices("address", formData);
      }
      window.location.reload(false);
    },

    // validate: (values) => {
    //   let errors = {};

    //   if (!values.location) {
    //     errors.location = "Manzil is Required";
    //   }

    //   if (!values.geolocation) {
    //     errors.geolocation = "Location is Required";
    //   }

    //   if (!values.destination) {
    //     errors.destination = "Description is Required";
    //   }

    //   return errors;
    // },
    validationSchema: LocationSchema,
  });

  return (
    <>
      <Modal
        sx={{ width: 815 }}
        modal={isOpenModal}
        setModal={setIsOpenModal}
        title={!idForEdit ? t("again.add") : t("again.edit")}
      >
        <ExitButton onClick={() => setIsOpenModal(false)} />
        <FormLocation formik={formik} />
        <GlobalLocationModal />
      </Modal>
    </>
  );
};
