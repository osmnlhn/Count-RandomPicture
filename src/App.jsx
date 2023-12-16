import "./App.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const [random, setRandom] = useState();
  const [count, setCount] = useState(0);

  function add() {
    setCount((pre) => pre + 1);
  }

  function minus() {
    setCount((pre) => pre - 1);
  }

  const randomImage = async () => {
    try {
      const response = await fetch("https://picsum.photos/200/300");
      console.log(response);
      if (response.ok) {
        setRandom(response.url);
      } else {
        console.error("Failed to fetch random image");
      }
    } catch (error) {
      console.error("Error fetching random image:", error);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={minus}>Minus</button>
      <h2>{count}</h2>
      <button onClick={add}>Add</button>
      <hr />
      <br/>
      <button onClick={randomImage}>Click Me</button>
      <br />
      <br />
      {<img src={random} alt="Random" />}
    </div>
  );
}
