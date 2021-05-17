import * as Yup from "yup";

export const initialFormValues = {
  autocomplete: "",
};

export const postcodeSchema = Yup.object().shape({
  autocomplete: Yup.string()
    .min(2, "Too short")
    .max(7, "too long")
    .required("Required postcode"),
});
