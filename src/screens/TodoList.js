import React, { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleForm = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === "") {
      return;
    }
    const array = todos; //空の配列を用意する、基本ここにTodoを入れる
    let newTodo = input; //inputの内容を変数に入れる
    array.push(newTodo);
    setTodos(array); //ここでは、[newTodo,次のnewTodo]と続くようにしたい
    console.log("handleSubmit後のtodos:", todos);
    setInput("");
  };

  // const todolist = todos;

  const handleRemoveTodo = (index) => {
    const todolist = todos;
    // todoのインデックスを指定して削除する
    todolist.splice(index, 1);
  };
  return (
    <div>
      <h1>ToDoList</h1>
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
