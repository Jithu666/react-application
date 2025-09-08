import React from "react";

const UserComponent = ({ user }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h3 className="mr-2">User Name: {user.name} </h3>
        <h3> User Age: {user.age}</h3>
      </div>
    </>
  );
};

const UserGrid = () => {
  const users = [
    { id: 1, name: "Aman", age: 23 },
    { id: 2, name: "Atul", age: 20 },
    { id: 3, name: "Ashik", age: 33 },
    { id: 4, name: "Azhar", age: 39 },
    { id: 5, name: "Paradeep", age: 24 },
  ];
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1>Rendering user cards:</h1>
      {users.map((user) => (
        <UserComponent key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
