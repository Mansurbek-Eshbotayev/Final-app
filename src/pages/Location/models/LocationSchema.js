import * as Yup from "yup";

export const LocationSchema = Yup.object({
  location: Yup.string().min(4, "too short").required("Location is Required"),
  geolocation: Yup.string()
    .min(4, "too short")
    .required("Geolocation is Required"),
  destination: Yup.string()
    .min(10, "too short")
    .required("Description is Required"),
});
