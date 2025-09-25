import React, { useState } from "react";
import useFetch6 from "../hooks/useFetch6";
import { searchForWorkspaceRoot } from "vite";

const JokeAPI = () => {
  const url = "https://v2.jokeapi.dev/joke/Any";

  const { data, loading, error } = useFetch6(url, 22);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const jokesPerPage = 16;
  const totalPages = Math.ceil(data.length / jokesPerPage);

  const startIndex = (page - 1) * jokesPerPage;
  const endIndex = startIndex + jokesPerPage;
  const currentPage = Array.isArray(data)
    ? data.slice(startIndex, endIndex)
    : 0;

  const filteredJokes = data.filter((joke) => {
    return joke.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (error) {
    return <p className="flex justify-center">{error.message}</p>;
  }

  return (
    <div>
      <h1 className="flex justify-center underline text-3xl m-6">Joke</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter Joke category"
        className="rounded-3xl border border-black px-4 py-2 pr-20 mr-6"
      />

      {loading ? (
        <p className="flex justify-center items-center">
          Fetching Jokes from an API endpoint.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
          {filteredJokes.map((joke) => (
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
      <div className="fixed left-6 bottom-6">
        <button
          className="rounded bg-green-300 hover:bg-green-400 px-4 py-1"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
        >
          Prev
        </button>
      </div>

      <div className="fixed right-6 bottom-6">
        <button
          className="rounded bg-green-300 hover:bg-green-400 px-4 py-1"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JokeAPI;
