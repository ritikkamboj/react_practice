import React from "react";
import { fetchJoke } from "./action";
import { useDispatch, useSelector } from "react-redux";

function JokeComponent() {
  const dispatch = useDispatch();
  const { loading, joke, error } = useSelector((state) => state);
  return (
    <div>
      <h1>Here is the joke fetching noob application</h1>

      <button onClick={() => dispatch(fetchJoke())}>
        {loading ? "loading..." : "Get A Joke"}
      </button>
      {error && <h2>{error}</h2>}
      <p>{joke}</p>
    </div>
  );
}

export default JokeComponent;
