import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* render the todo list on the ui */}
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
