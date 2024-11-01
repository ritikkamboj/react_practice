import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './store'

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);


  return (
    <div>
      <p>Lets see it works or not </p>
      <p> value of count is : {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement </button>
    </div>
  )
}

function RootApp() {
  return <Provider store={store}>
    <App />
  </Provider>
}

export default RootApp;