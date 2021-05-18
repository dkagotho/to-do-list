import React from "react";
import Todo from "./Todo";
import { useCollection } from "react-ketting";

const TodoList = ({ todos, setTodos, filteredTodos, status }) => {
  const { loading, error, items } = useCollection("/todo/", {
    refreshOnStale: true,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  // console.log(status);
  var filteredItems = [...items];

  // console.log(filteredItems);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredItems.map((todo) => {
          console.log(todo.id);
          return <Todo status={status} key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
