import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// If you are using redux, import the Provider and Store here
// import { Provider } from 'react-redux';
// import store from './store';

const root = ReactDOM.createRoot(document.getElementById("root"));
import store from "./redux/store";
import { Provider } from "react-redux";

root.render(
  <React.StrictMode>
    {/* If using Redux, wrap App with Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
