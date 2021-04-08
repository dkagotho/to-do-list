import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>My to do list</h1>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      {/* passing down the data to the list */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
