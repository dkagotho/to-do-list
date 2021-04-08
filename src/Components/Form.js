import React from "react";

const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select className="todo" className="filter-todo">
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="todo">To do</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
