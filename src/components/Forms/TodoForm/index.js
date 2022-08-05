import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import cx from "classnames";
import { SCHEMA_TASK_BODY } from "./../../../utils/schemaValidation";
import styles from "./../../../styles/styles.module.scss";

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
          <Field name="body" placeholder="Your task"  />

          <ErrorMessage
            name={"body"}
            component="div"
            className={styles.error}
          />
          <input className={styles.addBtn} type="submit" value="add" />
        </Form>
      </Formik>
    </>
  );
};

export default TodoForm;
