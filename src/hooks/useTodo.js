import { useState, useEffect } from "react";

const useTodo = () => {
  const [tasks, setTasks] = useState([initialValue]);

  return {
    tasks,
    setTasks,
    addTask: (value) => {
      const newTask = { id: Date.now(), body: value.body, isDone: false };
      setTasks([...tasks, newTask]);
    },
    setDoneTask: () => {},
    deleteTask: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
  };
};

export default useTodo;
