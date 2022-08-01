import React from "react";
import { useTodo } from "./../../hooks";
import TodoForm from "./../Forms/TodoForm/";
import TodoList from "./TodoList";

const Todo = () => {
  const { tasks, setTasks, addTask, setDoneTask, deleteTask } = useTodo([
    {
      id: Date.now(),
      body: "",
      isDone: false,
    },
  ]);
  return (
    <div>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        setDoneTask={setDoneTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default Todo;
