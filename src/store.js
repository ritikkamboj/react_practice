// store.js
import { createStore, combineReducers } from 'redux';

// Initial States
const initialCounterState = { count: 0 };
const initialAuthState = { isAuthenticated: false };

// Reducer 1: Counter Reducer
function counterReducer(state = initialCounterState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

// Reducer 2: Authentication Reducer
function authReducer(state = initialAuthState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
}

// Combine Reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
});

// Create Store
const store = createStore(rootReducer);

export default store;
