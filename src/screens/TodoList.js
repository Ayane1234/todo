import React, { useState } from "react";
import { TodoForm } from "../components/TodoForm";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const array = todos; //空の配列

  const handleForm = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // array.push("洗い物をする"); //[せんんたくものをする],[あたらしいタスク]
    // setTodos(array);
    let newTodo = input;
    todos.push(newTodo);
    console.log("handleSubmit後に再レンダリングtodos:", todos);
    setInput("");
  };

  const handleRemoveTodo = (index) => {
    // todoのインデックスを指定して削除する
    const todolist = todos.concat;
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
      {todos.map((todo, index) => {
        console.log(todo);
        return (
          <p index={index}>
            {todo}
            <button onClick={handleRemoveTodo(index)}>削除</button>
          </p>
        );
      })}
    </div>
  );
};
