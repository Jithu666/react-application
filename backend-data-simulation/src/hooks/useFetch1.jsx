import React, { useState, useEffect } from "react";

const useFetch1 = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromRestAPI = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        const data = await res.json();
        setData(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.log("Error ", error.status);
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromRestAPI();
  }, [url]);

  return { data, loading, error };
};

export default useFetch1;
