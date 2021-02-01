import React, { useContext, useState } from 'react';

import { GlobalContext } from '../Context/Context';

export default function Todo({ todo }) {
  const { deleteTodo } = useContext(GlobalContext);

  let [completed, setCompleted] = useState(todo.completed);

  const checkboxChange = () => {
    setCompleted((completed = !completed));
  };

  return (
    <li className={completed ? 'done' : ''}>
      {todo.todo}

      <label className="form-switch">
        <input
          type="checkbox"
          onChange={checkboxChange}
          checked={completed ? 1 : 0}
        />
        <i></i>
      </label>

      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        <i className="far fa-trash-alt"></i>
      </button>
    </li>
  );
}
