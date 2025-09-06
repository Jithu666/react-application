import React, { useState } from "react";

const FetchApiData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setData(null);

    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      const person = data.results[0];
      setData({
        name: `${person.name.first} ${person.name.last}`,
        email: `${person.email}`,
        gender: `${person.gender}`,
        age: `${person.dob.age}`,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Fetch Data From API Calls</h2>
      <button onClick={fetchData}>Fetch Data</button>

      {loading && <p>Loading..</p>}
      {data && (
        <p>
          Name: {data.name} <br />
          Age: {data.age} <br />
          Gender: {data.gender} <br />
          Email: {data.email}
        </p>
      )}
    </div>
  );
};

export default FetchApiData;
