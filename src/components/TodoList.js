import React, { useContext } from 'react';

import Todo from './Todo';

import { GlobalContext } from '../Context/Context';

const TodoList = () => {
  const { todos } = useContext(GlobalContext);

  return (
    <ul className="list">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
