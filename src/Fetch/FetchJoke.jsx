import React from "react";
import { useState } from "react";

const FetchJoke = () => {
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    setJoke(data);
    // console.log(data);
  };

  return (
    <div>
      <h2>Get a Joke</h2>
      <button onClick={fetchJoke}>Fetch Joke</button>
      {joke && (
        <p>
          Setup: {joke.setup} <br /> PunchLine: {joke.punchline}{" "}
        </p>
      )}
    </div>
  );
};

export default FetchJoke;
