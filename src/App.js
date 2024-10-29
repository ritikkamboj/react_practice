// Use Reducer Hook 



import React from 'react'
import { useReducer } from 'react'

function App() {

  const initialState = 0

  function reducer(state, action) {

    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return initialState;
    }


  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <p> Current Value is : {state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  )
}

export default App