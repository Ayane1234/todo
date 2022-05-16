import React, { useState } from "react";
import { TodoListItem } from "../components/TodoListItem";
import { Input } from "../components/Input";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleForm = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
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
      {/* <div style={styles.inputContainer}>
        <input
          onChange={(event) => handleForm(event)}
          type="text"
          value={input}
          placeholder="input your todo!"
          style={styles.inputText}
        ></input>

        <AddCircleIcon onClick={() => handleSubmit()} />
      </div> */}
      <Input
        handleForm={handleForm}
        value={input}
        handleSubmit={handleSubmit}
      />

      {todos.map((todo, index) => {
        return (
          <>
            <TodoListItem
              index={index}
              todo={todo}
              handleRemoveTodo={handleRemoveTodo}
            />
          </>
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
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },
};
