import React, { useRef, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  // but we want to track how many times it get re rendered 
  // but every time on re render the value of a again set to 0 

  let a = useRef(0);

  a.current += 1;
  console.log(a.current);



  function increment() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>value of count is : {count} the value of current is {a.current}</p>
      <button onClick={increment}>Click me </button>
    </div>
  )
}

export default App