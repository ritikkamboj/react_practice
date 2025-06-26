import React, { useState } from 'react'

// using useState using for form input 

function App() {

  const [name , setName] = useState("");

  function handleChange(e){
    setName(e.target.value);

  }
  return (
    <div>
      <h1>Value input comes below :</h1>

      <input type="text" placeholder='Type your name here ' value={name} onChange={handleChange}/>
      

    </div>
  )
}

export default App