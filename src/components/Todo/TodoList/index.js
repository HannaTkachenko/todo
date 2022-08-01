import React from 'react';

const TodoList = ({tasks, setDoneTask,deleteTask }) => {
  return (
    <div>
      <h2>tasks list</h2>
      <ul>
        {tasks.map((task) => (
          
          <li key={task.id}>
            <input type='checkbox' checked={task.isDone} onClick={
              ()=>setDoneTask(task.id)
            }/>
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
}

export default TodoList;
