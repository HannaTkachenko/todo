import React from "react";
import { Formik, Form, Field } from "formik";
import { SCHEMA_TASK_BODY } from "./../../../utils/schemaValidation";
import styles from './../../../styles/styles.scss';

const initialValues = {
  body: "",
  isDone: false,
};
const TodoForm = (props) => {
  const { addTask } = props;
  const onSubmit = (value, formikBag) => {
    addTask(value);
    formikBag.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SCHEMA_TASK_BODY}
      >
        <Form className={styles.form}>
          <Field className={styles.inputField} name="body" placeholder="Your task" />
          <input className={styles.addBtn} type="submit" value="add" />
        </Form>
      </Formik>
    </>
  );
};

export default TodoForm;
