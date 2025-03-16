import { applyMiddleware, createStore } from "redux";
import jokeReducer from "./JokeReducer";

import { thunk } from "redux-thunk"


const store = createStore(jokeReducer, applyMiddleware(thunk))

export default store;