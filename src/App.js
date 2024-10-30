//Seeing the use of useCallback hook 

import React, { useCallback, useState } from 'react'
import Func1 from './Func1'

function App() {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  const [adjective, setAdjective] = useState('good');

  const getAdjective = useCallback(
    () => {
      return 'grand' + count;
    },
    [count],
  )


  const increase2 = () => {
    setCount2((prevCount) => prevCount + 1);
  }


  const increase = () => {
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <div>
      <Func1 value={'good'} getAdjective={getAdjective} />
      <p>Count value is : {count}</p>

      <button onClick={increase}>OnClick</button>
      <p> Count 2 value is : {count2}</p>
      <button onClick={increase2}>Click to change 2</button>

    </div>
  )
}

export default App