import { useEffect, useState } from "react";

const useFetch3 = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      const fetchDataFromAPI = async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) {
            throw new Error(`Error: ${res.status}: ${res.statusText}`);
          }
          const data = await res.json();
          const stringData = JSON.stringify(data);
          console.log(stringData);
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
  }, [url]);

  return { data, loading, error };
};

export default useFetch3;
