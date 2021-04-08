import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState(" ");
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <h1>My to do list</h1>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
