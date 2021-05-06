import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import { KettingProvider } from "react-ketting";
import { Client } from "ketting";

const client = new Client("http://localhost:8081");

function App() {
  // const [inputText, setInputText] = useState(" ");
  // const [todos, setTodos] = useState([]);
  // const [status, setStatus] = useState("all");
  // const [filteredTodos, setFilteredTodos] = useState([]);

  // useEffect(() => {
  //   filterHandler();
  // }, [todos, status]);

  //gives todo items
  // const filterHandler = () => {
  //   switch (status) {
  //     case "completed":
  //       //check the todos and if they are completed, if true mark as completed
  //       setFilteredTodos(todos.filter((todo) => todo.completed === true));
  //       break;
  //     //check the todos and if they are not completed, mark as to do
  //     case "uncompleted":
  //       setFilteredTodos(todos.filter((todo) => todo.completed === false));
  //       break;
  //     default:
  //       setFilteredTodos(todos);
  //       break;
  //   }
  // };
  return (
    <KettingProvider client={client}>
      <div className="App">
        <h1>My to do list!</h1>
        <Form />
        {/* passing down the data to the list */}
        <TodoList />
      </div>
    </KettingProvider>
  );
}

export default App;
