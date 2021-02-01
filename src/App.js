import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { GlobalProvider } from './Context/Context';

function App() {
  return (
    <GlobalProvider>
      <div className="container my-3">
        <h1 className="text-center text-primary text-bold mb-3">
          ToDo:Track your work
        </h1>
        <TodoList />
        <TodoForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
