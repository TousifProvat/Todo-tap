import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/Context';
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm() {
  const [text, setText] = useState('');

  const { addTodo, deleteAll } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      todo: text,
      completed: false,
    };

    addTodo(newTodo);
  };

  return (
    <>
      <h3>Add new work</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter text..."
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={(e) => setText('')}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <button className="btn dlt-all" onClick={deleteAll}>
        Delete All Todo/s
      </button>
    </>
  );
}
