import React from "react";
import { useTodo } from "./../../hooks";
import TodoForm from "./../Forms/TodoForm/";

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
      <TodoForm addTask={addTask}/>
      <h2>tasks list</h2>
      <ul>
        {tasks.map((task) => (
          
          <li key={task.id}>
            {task.body}
            <span
              onClick={() => {deleteTask(task.id); }}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
