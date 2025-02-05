import React, { useState } from "react";
import "./index.css";
import SimpleTodo from "../SimpleTodo";

const AddTodo = () => {
  const [todo, setTodo] = useState(""); // State for the input field
  const [isTodoAdded, setIsTodoAdded] = useState(false);

  // Function to add a new todo
  const addTodo = async () => {
    if (!todo) {
      alert("Please enter a todo!");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: todo }),
      });

      if (response.ok) {
        setTodo(""); // Clear input field
        setIsTodoAdded(true);
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  //handleChangeInput for set State todo
  function handleChangeInput(e) {
    setTodo(e.target.value);
  }

  return (
    <>
      <h1 className="add-title">Add Your Todo</h1>
      <div className="add-todo-container">
        <input
          className="input-add-todo"
          type="text"
          value={todo}
          placeholder="Enter new todo..."
          onChange={handleChangeInput}
        />
        <button onClick={addTodo} type="button" className="btn-add-todo">
          Add Todo
        </button>
      </div>
      <SimpleTodo isTodoAdded={isTodoAdded} setIsTodoAdded={setIsTodoAdded} />
    </>
  );
};

export default AddTodo;
