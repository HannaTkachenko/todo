import React from "react";
import { useTodo } from "./../../hooks";
import TodoForm from "./../Forms/TodoForm/";
import TodoList from "./TodoList";
import Header from "./Header";
import styles from './../../styles/styles.scss';

const Todo = () => {
  const { tasks, setTasks, addTask, setDoneTask, deleteTask } = useTodo([
    {
      id: Date.now(),
      body: "",
      isDone: false,
    },
  ]);
  return (
    <>
      <Header />
      <section className={styles.tasksSection}>
        <TodoForm addTask={addTask} />
        <TodoList
          tasks={tasks}
          setDoneTask={setDoneTask}
          deleteTask={deleteTask}
        />
      </section>
    </>
  );
};

export default Todo;
