import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoListItem = (props) => {
  console.log("props", props);
  return (
    <div style={styles.todoContainer}>
      <div index={props.index} style={styles.todo}>
        {props.todo}
        <DeleteIcon
          onClick={() => props.handleRemoveTodo(props.index)}
          style={styles.deleteIcon}
        />
      </div>
    </div>
  );
};

const styles = {
  todoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },

  todo: {
    display: "flex", //flexを追加
    fontWeight: "600",
    width: "50%",
    height: "30px",
    border: "1px solid gray",
    backgroundColor: "white",
    padding: "20px 20px",
    boxShadow: "2px 2px 5px rgba(0,0,0,.2)",
    borderRadius: "15px",
    overflow: "hidden",
    position: "relative",
    wordBreak: "break-all",
  },

  deleteIcon: {
    position: "absolute",
    right: 20, //floatを削除
    backgroundColor: "white",
  },
};
