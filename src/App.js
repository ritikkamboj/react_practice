// very nice example to understand the use of useMemo Hook

import React from "react";
import { useMemo } from "react";
import { useState } from "react";

function slowFunction(num) {
  console.log("slow function runs ");

  // creating a high calculating task

  for (let i = 0; i < 1000000; i++) { }
  return num * 2;
}

function App() {
  const [count, setCount] = useState(2);
  console.log('rendering happens');


  const [input, setInput] = useState();

  const doubleValue = useMemo(() => slowFunction(count), [count]);

  return (
    <div>
      <p>value of count is : {count}</p>
      <p>Value of doubleCount : {doubleValue}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <input type="text" placeholder="Enter the text " value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default App;
