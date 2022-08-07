import * as Yup from "yup";

export const SCHEMA_TASK_BODY = Yup.object().shape({
body: Yup.string()
.min(2, 'Enter more!')
.max(140, 'Too much for one task!')
   .matches (/^[^\s][a-zA-Z0-9\s]*.{1,140}$/,
   "Start with letters not space")
  .required("Enter your task, please")})

