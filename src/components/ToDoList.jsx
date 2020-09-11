import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import ToDo from "./ToDo.jsx";

export default function ToDoList({ todos, removeToDo, toggleToDo, editTodo }) {
  return (
    <Paper style={{ margin: "0 2em" }}>
      <List>
        {todos.map((item) => (
          <ToDo
            key={item.id}
            task={item.task}
            id={item.id}
            completed={item.completed}
            removeToDo={removeToDo}
            toggleToDo={toggleToDo}
            editTodo={editTodo}
          />
        ))}
      </List>
    </Paper>
  );
}
