import React, { useState } from "react";
import useFetch6 from "../hooks/useFetch6";

const JokeAPI = () => {
  const url = "https://v2.jokeapi.dev/joke/Any";

  const { data, loading, error } = useFetch6(url, 22);

  if (error) {
    return <p className="flex justify-center">{error.message}</p>;
  }

  return (
    <div>
      <h1 className="flex justify-center underline text-3xl m-6">Joke</h1>
      {loading ? (
        <p className="flex justify-center items-center">
          Fetching Jokes from an API endpoint.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
          {data.map((joke) => (
            <li key={joke.id} className="flex flex-col border p-4 rounded-xl">
              {joke.setup ? (
                <>
                  <h1>Setup: {joke.setup}</h1>
                  <p>Delivery: {joke.delivery}</p>
                </>
              ) : (
                <p>Joke: {joke.joke}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JokeAPI;
