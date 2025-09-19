import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/users";

  const { data, loading, error } = useFetch(url);

  const filteredUsers = data.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p className="mt-10 p-2 pt-10 pl-10 inline text-2xl text-black underline hover:text-orange-400 font-medium">
        Users
      </p>
      <br />
      <input
        type="text"
        placeholder="Enter Name or Email Address."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className=" flex flex-row ml-auto mr-20 border rounded-2xl px-6 pr-20 py-1.5 w-fit"
      />
      <ul className="flex flex-wrap gap-4 ml-2">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li
              key={user.id}
              className="ml-10 mt-8 border border-black p-2 w-80"
            >
              <p>ID: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Company: {user.company.name}</p>
              <button
                className="bg-blue-500 text-white cursor-pointer px-2 py-1 mt-2 rounded"
                onClick={() => {
                  setSelectedUser(user);
                  setShowModal(true);
                }}
              >
                View Details
              </button>
            </li>
            //    <li>
            //     <p>UserName: {user.username}</p>
            //     <p>Website: {user.website}</p>
            //     <p>Phone: {user.phone}</p>
            //     <p>Company: {user.company.name}</p>
            //     <p>Address: {user.address.street}</p>
            //   </li>
            //   <li key={user.id}>
            //     // <p>{data.name}</p>
            //     //{" "}
            //   </li>
          ))
        ) : (
          <p className="flex justify-center items-center">No Users Found...</p>
        )}
      </ul>

      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-red-500"
              onClick={() => setShowModal(false)}
            >
              Close{" "}
            </button>
            <h2 className="text-lg font-bold mb-2">
              Name: {selectedUser.name}
            </h2>
            <p>User-Name: {selectedUser.username}</p>
            <h2>Address: </h2>
            <p>Street: {selectedUser.address.street}</p>
            <p>Suite: {selectedUser.address.suite}</p>
            <p>City: {selectedUser.address.city}</p>
            <p>Zip-Code: {selectedUser.address.zipcode}</p>
            <p>Phone: {selectedUser.phone}</p>
            <Link to={selectedUser.website} className="">
              Website: {selectedUser.website}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
