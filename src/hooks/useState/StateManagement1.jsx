import React, { useState } from "react";

const StateManagement1 = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    const formData = { name, username, email };

    try {
      const response = await fetch("http://127.0.0.1:5000/api/form", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not Ok");
      }

      const result = await response.json();
      console.log("Server response: ", result);
      setName("");
      setEmail("");
      setUsername("");
    } catch (error) {
      console.error("Error Submitting Form: ", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* {name && <p className="mt-4">Hello {name}!.</p>}

      {!name && (
        <button
          onClick={() => setName("Jithu")}
          className="cursor-pointer rounded bg-black text-white hover:bg-orange-400 hover: underline px-2 py-2 m-3"
        >
          Display Name
        </button>
      )} */}

      <form
        onSubmit={handleFormSubmission}
        className="bg-white shadow-md rounded-lg p-6 w-80"
      >
        <h1 className="text-center font-bold text-xl mb-4">Form</h1>
        <label className="block mb-4">
          <span className="block text-gray-700 font-medium mb-1">Name: </span>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
        </label>
        <label htmlFor="">
          <span className="block text-gray-700 font-medium mb-1">
            User-Name:
          </span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your User-Name"
          />
          <br />
        </label>
        <label htmlFor="">
          <span className="block text-gray-700 font-medium mb-1">Email:</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your Email address"
          />
        </label>
        <br />

        <button
          onClick={handleFormSubmission}
          className="w-full bg-black text-white py-2 rounded hover:bg-orange-400 transition-colors mt-4"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default StateManagement1;
