import { useState } from "react";
import "./App.css";

import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodoHandler = (text) => {
    setTodo([...todo, text]);
  };
  const deleteTodoHandler = (index) => {
    setTodo(todo.filter((_, idx) => idx !== index));
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler}></TodoForm>
      <TodoList todos={todo} deleteTodo = {deleteTodoHandler}></TodoList>
    </div>
  );
}

export default App;
