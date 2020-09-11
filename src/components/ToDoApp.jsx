import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ToDoForm from "./ToDoForm.jsx";
import ToDoList from "./ToDoList.jsx";
import { v4 as uuidv4 } from "uuid";

function ToDoApp() {
  const list = [
    { id: 1, task: "Walk the dog", completed: false },
    { id: 2, task: "Buy Groceries", completed: false },
    { id: 3, task: "Clean the house", completed: true },
  ];
  const [todos, setTodos] = useState(list);
  const addToDo = (newToDoText) => {
    setTodos([...todos, { id: uuidv4(), task: newToDoText, completed: false }]);
  };

  const removeToDo = (toDoId) => {
    const updateToDo = todos.filter((todo) => todo.id !== toDoId);
    setTodos(updateToDo);
  };
  const toggleToDo = (toDoId) => {
    const updateToDo = todos.map((todo) =>
      todo.id === toDoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updateToDo);
  };
  const editTodo = (toDoId, newTask) => {
    const updateToDo = todos.map((todo) =>
      todo.id === toDoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updateToDo);
  };
  return (
    <div className="todo-app">
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography color="inherit">ToDo List</Typography>
          </Toolbar>
        </AppBar>
        <ToDoForm addToDo={addToDo} />
        <ToDoList
          todos={todos}
          removeToDo={removeToDo}
          toggleToDo={toggleToDo}
          editTodo={editTodo}
        />
      </Paper>
    </div>
  );
}

export default ToDoApp;
