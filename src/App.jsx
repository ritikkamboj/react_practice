import React from "react";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  incrementByAmount,
} from "./redux/counter/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>The Value of count is {count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
        <p>
          Click the below button if you want to incrase the valuw with some
          specific value{" "}
        </p>
        <button onClick={() => dispatch(incrementByAmount(5))}>Surprise</button>
      </div>
    </div>
  );
}

export default App;
