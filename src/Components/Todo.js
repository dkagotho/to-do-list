import React from "react";
import { useResource } from "react-ketting";

const Todo = ({ text, todo, todos, setTodos }) => {
  const { loading, error, data, setData, submit } = useResource(todo);
  if (loading) return <p>Loading...</p>;

  if (error) return <div className="error">{error.message}</div>;

  //deleting events
  const deleteHandler = () => {
    setData({
      delete: data.deleted,
    });
  };
  //checking events
  const completeHandler = async () => {
    setData({
      ...data,
      complete: !data.completed,
    });
    await submit();
  };

  return (
    <div className="todo">
      <li className={`todo-item ${data.completed ? "completed" : ""}`}>
        {data.name}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
