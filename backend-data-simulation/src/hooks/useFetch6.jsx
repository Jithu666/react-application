import React, { useState, useEffect } from "react";

const useFetch6 = (url, count = 6) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      const fetchDataFromAPI = async () => {
        try {
          const requests = Array.from({ length: count }, () => fetch(url));

          const responses = await Promise.all(requests);

          responses.forEach((res) => {
            if (!res.ok) {
              throw new Error(`Error: ${error.status}: ${error.statusText}`);
            }
          });

          const data = await Promise.all(responses.map((r) => r.json()));
          console.log(data);
          setData(data);
        } catch (err) {
          console.log(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchDataFromAPI();
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [url, count]);

  return { data, loading, error };
};

export default useFetch6;
