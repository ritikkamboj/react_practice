import React, { useState } from 'react'


// seeing the counter pgram with the help of useState 
function App() {

  const [count , setCount] = useState(0);

function handleClick()
{
  setCount((count)=> count + 1)
}
function handleClick2()
{
  setCount((count)=> count -1 )
}

  return (
    <div>
      <h1>Counter is below</h1>
      <p>Value of counter is : {count}</p>
      <div>
         <button onClick={handleClick}>Change Counter </button>
         <button onClick={handleClick2}>decrease Counte</button>
      </div>
     
    </div>
  )
}

export default App