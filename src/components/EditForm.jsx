import { TextField } from "@material-ui/core";
import React from "react";
import useInputState from "../hooks/useInputState.js";
// import TextField from "@material-ui/core/TextField";

export default function EditForm({ task, id, editTodo, toggleChange }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, value);
          reset();
          toggleChange();
        }}
      >
        <TextField value={value} onChange={handleChange} />
      </form>
    </div>
  );
}
