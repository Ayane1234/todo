import React, { useState } from "react";
import { TodoForm } from "../components/TodoForm";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const array = todos; //空の配列

  console.log("一回目のレンダリングtodos:", todos);
  console.log("一回目のレンダリングarray:", array);

  // const tekito = () => {
  //   setTodos(array);
  //   setTodos(...todos, array);
  // };

  const handleForm = (event) => {
    setInput(event.target.value);
  };
  // console.log(input);

  const handleSubmit = (event) => {
    event.preventDefault();
    // array.push("洗い物をする"); //[せんんたくものをする],[あたらしいタスク]
    // setTodos(array);
    // setInput("");
    const newTodo = "ネイルする";
    todos.push(newTodo);
    console.log("handleSubmit後に再レンダリングtodos:", todos);
  };

  return (
    <div>
      <h1>ToDoList</h1>
      {/* <button onClick={() => tekito()}>適当</button> */}
      <div>
        <form>
          <input
            onChange={(event) => handleForm(event)}
            type="text"
            value={input}
            placeholder="input your todo!"
          ></input>
          <button onClick={(event) => handleSubmit(event)}>クリック</button>
        </form>
      </div>
      {/* {todos.map((todo) => {
        console.log(todo);
        return <p>{todo}</p>;
      })} */}
    </div>
  );
};
