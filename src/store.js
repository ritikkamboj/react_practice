import { createStore } from "redux";

//defining initial state 
const initialCounter = 0;

function countReducer(state = initialCounter, action) {
    switch (action.type) {
        case ("increment"):
            return state + 1;

        case ("decrement"):
            return state - 1;

        default:
            return state;
    }
}

const store = createStore(countReducer);

export default store;
