import React from 'react';
import styles from './../../../styles/styles.scss'

const TodoList = ({tasks, setDoneTask,deleteTask }) => {
  return (
    <div className={styles.tasksContainer}>
      <h2 className={styles.title}>tasks list</h2>
      <ul className={styles.list}>
        {tasks.map((task) => (
          
          <li className={styles.task} key={task.id}>
            <input type='checkbox' checked={task.isDone} onChange={
              ()=>setDoneTask(task.id)
            }/>
            {task.body}
            <span className={styles.deleteBtn}
              onClick={() => {deleteTask(task.id); }}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
