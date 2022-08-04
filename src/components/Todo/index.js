import React from "react";
import { useTodo } from "./../../hooks";
import TodoForm from "./../Forms/TodoForm/";
import TodoList from "./TodoList";
import Header from "./Header";

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
      <section>
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
