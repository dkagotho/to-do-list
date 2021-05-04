import React from "react";
import { useResource } from "react-ketting";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const { loading, error, data, setData, submit } = useResource({
    resource: "/todo/",
    mode: "POST",
    initialState: {
      name: "",
      completed: false,
    },
  });
  console.log("todo");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  const inputTextHandler = (e) => {
    setData({
      name: e.target.value,
    });
  };
  //prevent input frm refreshing after hitting add tab
  const submitTodoHandler = async (e) => {
    e.preventDefault();

    await submit();
  };
  //keeps the selected status on the list
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        //line21 to make ui update with the state. when click on add button text is added

        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          onChange={statusHandler}
          className="todo"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
