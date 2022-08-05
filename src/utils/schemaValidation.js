import * as Yup from "yup";

export const SCHEMA_TASK_BODY = Yup.object().shape({
body: Yup.string()
   .matches (/^[^\s][a-zA-Zа-яА-Я0-9\s]{1,140}$/)
  .required("Enter your task, please")})