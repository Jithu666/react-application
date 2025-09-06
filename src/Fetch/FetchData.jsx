import React from "react";
import { useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setData(null);

    setTimeout(() => {
      //   const response = {
      //     user: "Jithu",
      //     role: "Developer",
      //   };

      setData(response);
      setLoading(false);
    }, 4000);
  };

  return (
    <div>
      <h2>Simulated API Call</h2>
      <button onClick={fetchData}>Fetch Data</button>

      {loading && <p>Loading...</p>}
      {data && (
        <p>
          Hello {data.user}, you are a great {data.role}.
        </p>
      )}
    </div>
  );
};

export default FetchData;
