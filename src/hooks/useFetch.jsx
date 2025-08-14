import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    // const abortController = new AbortController();

    setTimeout(() => {
      async function getData() {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`);
          }
          const data = await response.json();
          // console.log(data);
          setData(data);
          setIsLoading(false);
        } catch (error) {
          // if (error.name === "AbortError") {
          //   console.log("Fetch Aborted");
          // } else {
          console.log("Failed to fetch blogs: ", error);
          setErrorState(error.message);
          setIsLoading(false);
        }
      }
      // }
      getData();
    });
    // return () => abortController.abort();
  }, [url]);

  return { data, isLoading, errorState };
};

export default useFetch;
