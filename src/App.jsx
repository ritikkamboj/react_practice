import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import { addListener } from "@reduxjs/toolkit";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("state", state);

  if (state.todo.isloading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <button onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
      {state.todo.data?.map((e) => (
        <li>{e.title}</li>
      ))}
    </div>
  );
}

export default App;
