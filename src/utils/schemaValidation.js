import * as Yup from "yup";

export const SCHEMA_TASK_BODY = Yup.string()
  .matches(/^[A-Za-zА-Яа-я0-9^%&,;:'"<>=?$]{1,140}$/,{ excludeEmptyString: true })
  .required('Add your task');