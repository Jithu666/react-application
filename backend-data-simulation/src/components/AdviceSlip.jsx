import React, { useState } from "react";
import useFetch5 from "../hooks/useFetch5";

const AdviceSlip = () => {
  const url = "https://api.adviceslip.com/advice";

  const { data, loading, error } = useFetch5(url, 10);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchterm] = useState("");
  const advicesPerPage = 20;

  const startIndex = (page - 1) * advicesPerPage;
  const endIndex = startIndex + advicesPerPage;
  const currentPage = Array.isArray(data)
    ? data.slice(startIndex, endIndex)
    : [];

  const totalPages = Array.isArray(data) ? data.length / advicesPerPage : 0;

  const searchAdvice = Array.isArray(data)
    ? data.filter((advice) =>
        advice.slip.advice.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (error)
    return <p className="flex justify-center items-center">{error.message}</p>;

  return (
    <div>
      <h1 className="flex justify-center m-6 underline">Advice Slip</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchterm(e.target.value);
          setPage(1);
        }}
        placeholder="Enter Advice to search for ?..."
        className="flex ml-auto rounded-3xl border px-4 py-2 pr-20 mr-6 "
      />
      {loading ? (
        <p className="flex justify-center">Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
          {searchAdvice.map((advice) => (
            <li key={advice.id} className="border-2 rounded-lg p-4 ">
              <h1>Id: {advice.slip.id}</h1>
              <h1>Advice: {advice.slip.advice}</h1>
            </li>
          ))}
        </ul>
      )}
      <div className="fixed left-6 bottom-6">
        <button
          className="rounded bg-green-300 hover:bg-green-500 px-4 py-2"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
        >
          Prev
        </button>
      </div>

      <div className="fixed right-6 bottom-6">
        <button
          className="rounded bg-green-300 hover:bg-green-500 px-4 py-2"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdviceSlip;
