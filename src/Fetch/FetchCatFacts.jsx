import React, { useEffect, useState } from "react";

const FetchCatFacts = () => {
  const [fact, setFact] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFact = async () => {
      const url = "https://catfact.ninja/fac";
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Status ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setFact(data.fact);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        console.log("Fetch API Returned a response");
      }
    };
    fetchFact();
  }, []);

  return (
    <div>
      <h3>Fetch Cat Facts from API</h3>
      <hr />
      <br />
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : fact ? (
        <p>Fact: {fact}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchCatFacts;
