import * as yup from "yup";

export const loginValidationSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
