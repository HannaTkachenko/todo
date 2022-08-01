import * as Yup from "yup";

export const SCHEMA_TASK_BODY = Yup.object().shape({
body: Yup.string()
  .min(1)
  .max(140)
  .required()})