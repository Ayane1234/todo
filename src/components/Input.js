import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const Input = (props) => {
  console.log("Inputのprops", props);
  return (
    <div style={styles.inputContainer}>
      <input
        onChange={(event) => props.handleForm(event)}
        type="text"
        value={props.input}
        placeholder="input your todo!"
        style={styles.inputText}
      ></input>

      <AddCircleIcon onClick={() => props.handleSubmit()} />
    </div>
  );
};

const styles = {
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    marginTop: "40px",
    borderBottom: "1px solid gray",
  },
  inputText: {
    width: "180px",
    borderStyle: "none",
    borderBottom: "1px solid gray",
    marginRight: "20px",
    marginBottom: "40px",
  },
};
