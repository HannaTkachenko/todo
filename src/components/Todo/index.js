import React from "react";
import { Formik, Form, Field } from "formik";
import { useTodo } from "./../../hooks";


const Todo = () => {
  const { tasks, setTasks, addTask, setDoneTask, deleteTask } = useTodo([
    {
      id: Date.now(),
      body: "test",
      isDone: false,
    },
  ]);
  return (
    <div>
      <Formik initialValues={{ body: "" }} onSubmit={addTask}>
        <Form>
          <Field name="body" />
          <input type='submit' value='add' />
        </Form>
      </Formik>
      <h2>tasks list</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
