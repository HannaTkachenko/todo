import { useState } from "react";

const useTodo = (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);

  return {
    tasks,
    setTasks,
    addTask: (value) => {
      const newTask = { id: Date.now(), body: value.body, isDone: false };
      setTasks([...tasks, newTask]);
    },
    setDoneTask: (id) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            task.isDone = true;
            return task;
          }
          return task;
        })
      );
    },
    deleteTask: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
  };
};

export default useTodo;
