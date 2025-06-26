// counter stops and play program 

import React, { useEffect, useState } from 'react'

function App() {

  const [count , setCount] = useState(0) ;

  const [active , setActive] = useState(true)


    
  useEffect(() => {

    if(!active) return ;

    const interval = setInterval(()=> setCount((prev)=> prev + 1 ),1000)
    
  
    return () => clearInterval(interval)
  }, [active])
  


  function toggleButton (){
    
    setActive((prev)=> !prev)
  }



  return (
    <div>
      <p>Counter value is : {count}</p>
      <button onClick={toggleButton}>play/Stop</button>
      <button onClick={()=> setCount(0)}>reset Timer </button>


    </div>
  )
}

export default App