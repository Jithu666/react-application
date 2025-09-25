import React, { useState } from "react";
import useFetch1 from "../hooks/useFetch1";

const Comments = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const commentsPerPage = 8;

  const { data, loading, error } = useFetch1(url);

  if (error) return <p>Error {error}</p>;

  const filterComments = data
    .filter((comment) => comment.id < 500)
    .filter((comment) => {
      return (
        comment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comment.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

  const startIndex = (page - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  const currentPage = filterComments.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filterComments.length / commentsPerPage);

  return (
    <div>
      <h1 className="flex flex-row justify-center text-2xl text-red-500 underline font-bold mt-4">
        Comments
      </h1>

      <input
        type="text"
        value={searchTerm}
        placeholder="Enter Comment"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1);
        }}
        className="flex ml-auto mr-12 border rounded-4xl pl-6 px-2 py-2 pr-20 "
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10">
        {/* Renders the entire list of Data onto the browser window. */}
        {/* {data.map((comment) => (
          <li
            key={comment.id}
            className="border-2 border-black hover:border-green-500 p-4 rounded-lg
             cursor-pointer"
          >
            <h1 className="text-md">Id: {comment.id}</h1>
            <h1 className="">Name: {comment.name}</h1>
            <h1>E-mail: {comment.email}</h1>
            <h1>Body: {comment.body}</h1>
          </li>
        ))} */}

        {/* Renders only the filtered list of Data onto the browser window. */}
        {loading ? (
          <p className="flex justify-center items-center">
            Fetching Comments...
          </p>
        ) : (
          currentPage.map((comment) => (
            <li
              key={comment.id}
              className="border border-black hover:bg-green-50 rounded-md p-4"
            >
              <h1 className="text-md">Id: {comment.id}</h1>
              <h1 className="">Name: {comment.name}</h1>
              <h1>E-mail: {comment.email}</h1>
              <h1>Body: {comment.body}</h1>
            </li>
          ))
        )}
      </ul>

      <div className="fixed right-4 bottom-4">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= totalPages}
          className="bg-green-400 hover:bg-green-50 px-3 py-2 rounded-lg font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Comments;
