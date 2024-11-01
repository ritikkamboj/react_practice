// App.js
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <h1>Redux Example</h1>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div>
      <div>
        <h2>Authentication: {isAuthenticated ? 'Logged In' : 'Logged Out'}</h2>
        <button onClick={() => dispatch({ type: 'LOGIN' })}>Log In</button>
        <button onClick={() => dispatch({ type: 'LOGOUT' })}>Log Out</button>
      </div>
    </div>
  );
}

export default function RootApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
