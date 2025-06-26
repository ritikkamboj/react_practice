import React, { useMemo, useState } from 'react'
// we are seeing the use of useMemo hook 

function expFunc(num)
{
  console.log('function running ')

  for(let i=0 ; i<100000000 ; i++)
  {

  }
  return num *2 ;
}



function App() {

  const [count , setCount] = useState(0);
  const [text , setText] = useState("")

  const doubleValue = useMemo(()=> expFunc(count),[count])
  // const doubleValue =expFunc(count)

  return (
    <div>
      <p>The value of  count is : {count}</p>
      <p>The value of double count is :{doubleValue}</p>

      <button onClick={()=> setCount(count => count  + 1)}>increase count</button>
      <input type="text" placeholder='type the text here' value={text} onChange={(e)=> setText(e.target.value)} />
    </div>
  )
}

export default App