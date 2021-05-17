import * as Yup from "yup";

export const initialFormValues = {
  postcode: "",
};

export const postcodeSchema = Yup.object().shape({
  postcode: Yup.string()
    .min(2, "Too short")
    .max(7, "too long")
    .required("Required postcode"),
});
