import * as yup from "yup";

export const editEventSchema = yup.object().shape({
  nameEvent: yup.string(),

  description: yup.string(),

  dateEvent: yup.string(),

  startTime: yup.string(),

  endTime: yup.string(),
});
