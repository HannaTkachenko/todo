import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./../../../styles/styles.module.scss";

const TodoList = ({ tasks, setDoneTask, deleteTask }) => {
  return (
    <div className={styles.tasksContainer}>
      <h2>tasks list</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => setDoneTask(task.id)}
            />
            <p>{task.body}</p>
            <DeleteIcon
              onClick={() => {
                deleteTask(task.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
