import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError(true);
          throw new Error(`Error ${res.status} : ${res.statusText}`);
        }
        const data = await res.json();
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log("Fetchh error: ", error);
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromAPI();
  }, []);
  return { data, loading, error };
};

export default useFetch;
