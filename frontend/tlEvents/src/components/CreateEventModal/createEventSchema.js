import * as yup from "yup";

export const createEventSchema = yup.object().shape({
  nameEvent: yup
    .string()
    .required("The name is mandatory!")
    .min(3, "The name must be at least 3 characters long.")
    .max(127, "The name can have a maximum of 127 characters."),

  description: yup.string().required("Description is mandatory!"),

  dateEvent: yup.string().required("Required field!"),

  startTime: yup.string().required("Required field!"),

  endTime: yup.string().required("Required field!"),
});
