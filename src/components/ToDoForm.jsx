import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState.js";

export default function ToDoForm({ addToDo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <div style={{ textAlign: "center", margin: "1em 0" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addToDo(value);
          reset();
        }}
      >
        <TextField
          id="outlined-search"
          label="ToDo Item"
          type="search"
          variant="outlined"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
