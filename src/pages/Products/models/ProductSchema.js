import * as Yup from "yup";

export const ProductSchema = Yup.object({
  name: Yup.string().min(4, "too short").required("Product name is Required"),
  cost: Yup.number().min(4, "too short").required("Cost is Required"),
  weight: Yup.string().min(3, "too short").required("Weight is Required"),
  size: Yup.string().min(4, "too short").required("Size is Required"),
  warranty: Yup.string().max(1, "too long").required("Warranty is Required"),
  capacity: Yup.string().max(1, "too long").required("Capacity is Required"),
  newCost: Yup.number().min(4, "too short").required("NewCost is Required"),
  body: Yup.string()
    .min(10, "too short")
    .max(100, "too long")
    .required("Body is Required"),
});
