import React from "react";
import Todo from "./Todo";
import "../css/todo.css";

export default function TodoList({todos, onRemoveTodo}) {
  return (
    <div className="todo-list">
      {
        todos && todos.map(
           (todo) => {
              return <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/>
           }
        )
      }
    </div>
  );
}
