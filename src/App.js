import { useState } from "react";

// example to understand the use of useState Hook 
// form input can also possible  ??
function App() {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  function Increment() {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  function valueTyped(e) {
    setValue(e.target.value);

  }
  return (

    <div>
      <p>Value of Count : {count}</p>
      <button onClick={Increment} >Click to Increment </button>
      <br />
      <button onClick={decrement}>Click to decrease the value</button>
      <p>-----------------------------------------------------------------------------</p>
      <h2>The value which user typed is : {value}</h2>
      <input type="text" onChange={valueTyped} />
    </div>
  );
}

export default App;
