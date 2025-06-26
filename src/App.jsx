import React, { useReducer } from 'react'
// use Reducer hook 



const initialState = {count : 0}

function reducer(state , action)
{
  switch(action.type){
    case "inc":
      return {count : state.count + 1}
    case 'dec':
      return {count : state.count - 1}
    case 'reset':
      return {count : 0}
    default :
    throw new Error("mistake kardi ")
  }

}


function App() {

  const [state, dispatch] =useReducer(reducer, initialState)
  return (
    <div>
      <p>count value is : {state.count}</p>
      <div>
        <button onClick={()=> dispatch({type : "inc"})}>+</button>
        <button onClick={()=> dispatch({type : "dec"})}>-</button>
        <button onClick={()=> dispatch({type : "reset"})}>RESET</button>
      </div>
    </div>
  )
}

export default App