import { useEffect, useState } from "react";

const useFetch3 = (url, count = 18) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      const fetchDataFromAPI = async () => {
        try {
          const requests = Array.from({ length: count }, () => fetch(url));
          const responses = await Promise.all(requests);
          responses.forEach((res) => {
            if (!res.ok) {
              throw new Error(`Error: ${res.status}: ${res.statusText}`);
            }
          });
          const data = await Promise.all(responses.map((res) => res.json()));
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
  }, [url, count]);

  return { data, loading, error };
};

export default useFetch3;
