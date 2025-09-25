import { useState } from "react";
import useFetch3 from "../hooks/useFetch3";

const CatFact = () => {
  const url = "https://catfact.ninja/fact";

  const { data, loading, error } = useFetch3(url);

  const [page, setPage] = useState(1);
  const factsPerPage = 9;
  const totalPages = data.length / factsPerPage;

  const startIndex = (page - 1) * factsPerPage;
  const endIndex = startIndex + factsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  if (error)
    return (
      <p className="flex justify-center items-center text-6xl text-red-500">
        Error: {error.toString()}
      </p>
    );

  return (
    <>
      <h1 className="flex flex-row justify-center text-4xl underline pt-10">
        Cat Fact
      </h1>
      {loading ? (
        <p className="flex justify-center items-center text-6xl text-yellow-500 font-serif mt-10">
          Loading...
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-4 m-6">
          {currentPageData.map((catFact) => {
            return (
              <li
                className="flex flex-col p-4 border rounded-lg"
                key={catFact.fact}
              >
                <p className="flex flex-col font-medium">Fact : </p>
                {catFact.fact}
              </li>
            );
          })}
        </ul>
      )}
      <div className="fixed right-5 bottom-5">
        <button
          className="bg-green-400 hover:bg-green-200 rounded-lg px-4 py-2"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>

      <div className="fixed left-5 bottom-5">
        <button
          className="bg-green-400 hover:bg-green-200 rounded-lg px-4 py-2"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
        >
          Prev
        </button>
      </div>
    </>
  );
};

export default CatFact;
