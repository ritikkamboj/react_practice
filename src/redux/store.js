import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo"

const store = configureStore({
    reducer: {
        todo: todoReducer

    }
});

export default store;