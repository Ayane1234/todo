import React, { useState } from "react";
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
      <div style={styles.inputContainer}>
        <input
          onChange={(event) => handleForm(event)}
          type="text"
          value={input}
          placeholder="input your todo!"
          style={styles.inputText}
        ></input>

        <AddCircleIcon onClick={() => handleSubmit()} />
        {/* <button onClick={() => handleSubmit()}>クリック</button> */}
      </div>

      {todos.map((todo, index) => {
        return (
          <div style={styles.todoContainer}>
            <div index={index} style={styles.todo}>
              {todo}
              <DeleteIcon
                onClick={() => handleRemoveTodo(index)}
                style={styles.deleteIcon}
              />
            </div>
            {/* <button onClick={() => handleRemoveTodo(index)}>削除</button> */}
          </div>
        );
      })}
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

  todoContainer: {
    height: "100px",
    display: "flex",
    justifyContent: "center",
  },

  todo: {
    display: "flex", //flexを追加
    fontWeight: "600",
    width: "200px",
    height: "30px",
    border: "1px solid gray",
    backgroundColor: "white",
    padding: "20px 20px",
    boxShadow: "2px 2px 5px rgba(0,0,0,.2)",
    borderRadius: "15px",
  },

  deleteIcon: {
    marginLeft: "70px", //floatを削除
  },
};
