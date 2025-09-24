import React, { useEffect, useState } from "react";

const useFetch4 = (url, count = 8) => {
  // Manage State's
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect Hook.
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      const fetchDataFromAPI = async () => {
        try {
          const requests = Array.from({ length: count }, () => fetch(url));
          const res = await Promise.all(requests);
          res.forEach((r) => {
            if (!r.ok) {
              throw new Error(`Error : ${r.status}`);
            }
          });
          const data = await Promise.all(res.map((r) => r.json()));
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
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [url, count]);

  return { data, loading, error };
};

export default useFetch4;
