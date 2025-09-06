import React, { useState, useEffect } from "react";

const FetchOnMount = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();

      //   console.log(data);
      setQuote(data);
    };
    fetchQuote();
  }, []);

  return (
    <div>
      <p>
        <strong>Fetch Quote</strong>
      </p>
      {quote ? (
        <p>
          {" "}
          Joke Setup: {quote.setup} <br /> Joke PunchLine: {quote.punchline}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchOnMount;
