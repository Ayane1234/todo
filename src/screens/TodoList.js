import React, { useState } from "react";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Paper } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleForm = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    if (input === "") {
      return;
    }
    const array = todos; //空の配列を用意する、基本ここにTodoを入れる
    const newTodo = input; //inputの内容を変数に入れる
    array.push(newTodo);
    setTodos(array); //ここでは、[newTodo,次のnewTodo]と続くようにしたい
    console.log("handleSubmit後のtodos:", todos);
    setInput("");
  };

  // const todolist = todos;

  const handleRemoveTodo = (index) => {
    let todolist = todos;
    console.log("handlleRemoveTodo後のtodolist:", todolist);
    // todoのインデックスを指定して削除する
    todolist.splice(index, 1);
    const todolist2 = [...todolist];
    setTodos(todolist2);
    console.log("todolist2:", todolist2);
    console.log("setTodos(todolist2)後のtodos:", todos);
  };

  return (
    <div>
      <Stack container spacing={3} alignItems="center">
        <Grid item>
          <TextField
            id="standard-basic"
            label="input your todo"
            variant="standard"
            onChange={(event) => handleForm(event)}
            value={input}
            style={styles.TextField}
          />
          {/* <input
          onChange={(event) => handleForm(event)}
          type="text"
          value={input}
          placeholder="input your todo!"
        ></input> */}
          <AddCircleIcon onClick={() => handleSubmit()} />
          {/* <button onClick={() => handleSubmit()}>クリック</button> */}
        </Grid>

        <Grid item>
          {todos.map((todo, index) => {
            return (
              <Paper
                elevation={10}
                variant="outlined"
                style={styles.todo}
                index={index}
              >
                {todo}
                <DeleteIcon
                  onClick={() => handleRemoveTodo(index)}
                  style={{ color: "gray" }}
                />
                {/* <button onClick={() => handleRemoveTodo(index)}>削除</button> */}
              </Paper>
            );
          })}
        </Grid>
      </Stack>
    </div>
  );
};
const styles = {
  todo: {
    // border: "1px solid gray",
    margin: "12px",
    width: "300px",
    backgroundColor: "#AEC4E5",
    boxShadow: "4px 4px #4072B3",
    padding: "4px 2px",
  },
};
