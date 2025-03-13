// import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from './counter/CounterSlice'
// const store = configureStore({
//     reducer: {
//         counter: counterReducer

//     }
// });

// export default store;

import { createStore } from "redux";

const initialState = {
    count: 0
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "incre":
            return { count: state.count + 1 }
        case "decre":
            return { count: state.count - 1 }
        default:
            return { count: state.count }
    }
}

const store = createStore(counterReducer);
export default store;