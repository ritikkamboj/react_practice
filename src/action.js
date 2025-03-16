export const FETCH_JOKE_REQUEST = "FETCH_JOKE_REQUEST";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_JOKE_FAILURE = "FETCH_JOKE_FAILURE";

const fetchJokeRequest = () => ({ type: FETCH_JOKE_REQUEST });
const fetchJokeSuccess = (joke) => ({ type: FETCH_JOKE_SUCCESS, payload: joke });
const fetchJokeFailure = (error) => ({ type: FETCH_JOKE_FAILURE, payload: error });

export const fetchJoke = () => {
    return async (dispatch) => {
        dispatch(fetchJokeRequest())
        try {
            const res = await fetch(`https://official-joke-api.appspot.com/jokes/random`);
            const data = await res.json();
            console.log(data)
            dispatch(fetchJokeSuccess(data.setup + " " + data.punchline));

        } catch (error) {
            dispatch(fetchJokeFailure(error))

        }

    }

}