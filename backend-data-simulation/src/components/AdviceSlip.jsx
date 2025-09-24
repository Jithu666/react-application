import React from "react";
import useFetch5 from "../hooks/useFetch5";

const AdviceSlip = () => {
  const url = "https://api.adviceslip.com/advice";

  const { data, loading, error } = useFetch5(url, 6);

  if (error)
    return <p className="flex justify-center items-center">{error.message}</p>;

  return (
    <div>
      <h1 className="flex justify-center m-6 underline">Advice Slip</h1>
      {loading ? (
        <p className="flex justify-center">Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
          {data.map((advice) => (
            <li key={advice.id} className="border-2 rounded-lg p-4 ">
              <h1>Id: {advice.slip.id}</h1>
              <h1>Advice: {advice.slip.advice}</h1>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdviceSlip;
