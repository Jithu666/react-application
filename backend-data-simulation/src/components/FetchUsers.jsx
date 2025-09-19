import React, { useState, useEffect } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error(`Error : ${res.statusText}`);
        }
        const data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <li>Name: {user.name}</li>
            <button
              onClick={() => setSelectedUser(user)}
              className="border border-black px-1"
            >
              View
            </button>
          </React.Fragment>
        ))}
      </ul>

      {selectedUser && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2>{selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Company: {selectedUser.company.name}</p>
            <button
              onClick={() => setSelectedUser(null)}
              className="border border-black px-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  backgroundColor: "rgba(0,0,0,0.5)",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
};

export default FetchUsers;
