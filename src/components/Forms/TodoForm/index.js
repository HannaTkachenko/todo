import React from "react";
import { Formik, Form , Field} from "formik";
import { useTodo } from "./../../../hooks";
import { SCHEMA_TASK_BODY } from './../../../utils/schemaValidation';


const TodoForm = () => {
  const { addTask } = useTodo({body:''});

  return (
    <>
      <Formik initialValues={{ body: "" }} onSubmit={addTask} validationSchema={SCHEMA_TASK_BODY}>
        <Form>
          <Field name="body" />
          <input type="submit" value="add" />
        </Form>
      </Formik>
    </>
  );
};

export default TodoForm;
