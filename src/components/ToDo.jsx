import React from "react";
import {
  Divider,
  Checkbox,
  ListItemText,
  ListItem,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditForm from "./EditForm";
import useToggle from "../hooks/useToggle.js";
export default function ToDo({
  task,
  completed,
  id,
  removeToDo,
  toggleToDo,
  editTodo,
}) {
  const [isEditing, toggleChange] = useToggle(false);
  return (
    <>
      <ListItem>
        {isEditing ? (
          <EditForm
            task={task}
            id={id}
            editTodo={editTodo}
            toggleChange={toggleChange}
          />
        ) : (
          <>
            {" "}
            <Checkbox checked={completed} onClick={() => toggleToDo(id)} />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <IconButton style={{ padding: "0.5em" }}>
              <DeleteIcon onClick={() => removeToDo(id)} />
            </IconButton>
            <IconButton style={{ padding: "0.5em" }}>
              <EditIcon onClick={toggleChange} />
            </IconButton>
          </>
        )}
      </ListItem>
      <Divider />
    </>
  );
}
