import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import axios from 'axios';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'UPDATE_TODO':
      return {};
    case 'DELETE_TODO':
      return {
        ...state,
        todos: action.payload,
      };
    case 'DELETE_ALL_TODO':
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}

// Global state
const State = {
  todos: [{ todo: 'add todo', completed: false, id: uuidv4() }],
  error: null,
  loading: true,
};

// context

export const GlobalContext = createContext(State);

// Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, State);

  // Action

  async function addTodo(todo) {
    try {
      dispatch({
        type: 'ADD_TODO',
        payload: todo,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function updateTodo(id) {}

  async function deleteTodo(id) {
    const newTodos = state.todos.filter((todo) => todo.id !== id);

    try {
      dispatch({
        type: 'DELETE_TODO',
        payload: newTodos,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteAll() {
    try {
      dispatch({
        type: 'DELETE_ALL_TODO',
        payload: [],
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        error: state.error,
        loading: state.loading,
        deleteTodo,
        deleteAll,
        updateTodo,
        addTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
