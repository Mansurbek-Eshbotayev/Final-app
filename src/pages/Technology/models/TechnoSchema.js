import * as Yup from "yup";

export const TechnoSchema = Yup.object({
  name: Yup.string().min(4, "too short").required("Name is Required"),
  description: Yup.string()
    .min(4, "too short")
    .required("Description is Required"),
  thumbnail: Yup.string().min(4, "too short").required("Thumbnail is Required"),
  link: Yup.string().min(4, "too short").required("Link is Required"),
});
