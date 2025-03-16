import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: "decre" })}>-</button>
        <p>The Value of count is {count}</p>
        <button onClick={() => dispatch({ type: "incre" })}>+</button>
        {/* <button onClick={() => dispatch(multiply())}>*</button>
        <p>
          Click the below button if you want to incrase the valuw with some
          specific value{" "}
        </p>
        <button onClick={() => dispatch(incrementByAmount(5))}>Surprise</button> */}
      </div>
    </div>
  );
}

export default App;
