import React, { useState, useEffect } from "react";

const useFetch2 = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (err) {
        setError(err);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromAPI();
  }, [url]);

  return { data, loading, error };
};

export default useFetch2;
