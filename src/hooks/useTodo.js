import { useState } from "react";

const useTodo = (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);

  return {
    tasks,
    addTask: (value) => {
      const newTask = { id: Date.now(), body: value.body, isDone: false };
      setTasks([...tasks, newTask]);
    },
    setDoneTask: (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, isDone: !task.isDone } : task
        )
      );
    },
    deleteTask: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
  };
};

export default useTodo;
