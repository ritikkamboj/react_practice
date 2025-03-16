import { FETCH_JOKE_FAILURE, FETCH_JOKE_REQUEST, FETCH_JOKE_SUCCESS } from "./action"

const initialState = {
    loading: false,
    joke: "",
    error: ""
}

const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOKE_REQUEST:
            return { ...state, loading: true, joke: "", error: "" }
        case FETCH_JOKE_SUCCESS:
            return { ...state, loading: false, joke: action.payload, error: "" }
        case FETCH_JOKE_FAILURE:
            return { ...state, loading: false, joke: "", error: action.payload }

        default:
            return state;

    }

}
export default jokeReducer;