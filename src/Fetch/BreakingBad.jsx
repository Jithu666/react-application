import React, { useState, useEffect } from "react";

const BreakingBad = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const url = "https://api.breakingbadquotes.xyz/v1/quotes";
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Fetch Quote from Breaking Bad
      </h3>
      <p>
        Quote: {quote} <br /> Author: {author}
      </p>
    </div>
  );
};

export default BreakingBad;
