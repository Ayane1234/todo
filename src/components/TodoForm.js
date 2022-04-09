import React, { useState } from "react";

export const TodoForm = () => {
  const [input, setInput] = useState("");
  let newToDo = "";

  const handleForm = (event) => {
    setInput(event.target.value);
  };
  console.log(input);

  const handleSubmit = (event) => {
    event.preventDefault();

    setInput("");
  };

  return (
    <div>
      <form>
        <input
          onChange={(event) => handleForm(event)}
          type="text"
          value={input}
          placeholder="input your todo!"
        ></input>
        <button onClick={handleSubmit}>クリック</button>
      </form>
    </div>
  );
};

// formにonSubmit属性をつける?
