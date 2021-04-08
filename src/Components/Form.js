import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  //prevent input frm refreshing after hitting add tab
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, done: false, id: Math.random() * 1000 },
    ]);
    //after submitting test make input box empty
    setInputText("");
  };
  return (
    <form>
      <input
        //line21 to make ui update with the state. when click on add button text is added
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
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
