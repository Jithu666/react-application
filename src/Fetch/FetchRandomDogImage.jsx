import React, { useEffect, useState } from "react";

const FetchRandomDogImage = () => {
  const [url, setUrl] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    const fetchDog = async () => {
      const url = "https://dog.ceo/api/breeds/image/random";
      const res = await fetch(url);
      const data = await res.json();
      setUrl(data.message);
      console.log(data);

      const parts = data.message.split("/");
      const name = parts[4];
      setName(name);
    };
    fetchDog();
  }, []);

  return (
    <div>
      <h2>Dog: {name}</h2>
      {url ? (
        <img src={url} alt="Dog Image" width={"520px"} />
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default FetchRandomDogImage;
