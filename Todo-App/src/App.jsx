import "./css/todo.css";
import React from 'react'
import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
     setTodos([...todos.filter((todo) => todo.id !== id)])
     console.log(todos);
     
  };

  return (
    <div className="App">
      <div className="main">
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo}/>
      </div>
    </div>
  );
}
