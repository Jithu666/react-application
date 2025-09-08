import React from "react";

const UsersList = () => {
  const users = [
    { id: 1, name: "Aman", age: 23 },
    { id: 2, name: "Atul", age: 20 },
    { id: 3, name: "Ashik", age: 33 },
    { id: 4, name: "Azhar", age: 39 },
    { id: 5, name: "Paradeep", age: 24 },
  ];

  return (
    <div className="flex justify-center items-center">
      <ul>
        <li>
          {users.map((user) => (
            <p key={user.id}>
              {user.name} you are {user.age} years old.
            </p>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default UsersList;
