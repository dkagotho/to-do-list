import React from "react";
import Todo from "./Todo";
import { useCollection } from "react-ketting";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const { loading, error, items } = useCollection("/todo/", {
    refreshOnStale: true,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {items.map((todo) => {
          console.log(todo.id);
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
