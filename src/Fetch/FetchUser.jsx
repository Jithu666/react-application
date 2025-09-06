import React, { useState, useEffect } from "react";

const FetchUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const res = await fetch(url);
      const data = await res.json();
      setUser(data);
      console.log(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User's List</h2>
      <ul>
        {user.map((user) => (
          <li
            key={user.id}
            style={{
              listStyle: "none",
            }}
          >
            Id: {user.id} <br /> Name: {user.name} <br /> User-Name:{" "}
            {user.username} <br /> Address: {user.address.street},{" "}
            {user.address.city} <br /> Company: {user.company.name} <br />{" "}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchUser;
