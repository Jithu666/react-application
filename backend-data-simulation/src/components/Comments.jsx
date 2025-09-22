import React from "react";
import useFetch1 from "../hooks/useFetch1";

const Comments = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const { data, loading, error } = useFetch1(url);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error {error}</p>;

  const filterComments = data.filter((comment) => comment.postId === 24);

  return (
    <div>
      <h1 className="flex justify-center text-2xl text-red-500 underline font-bold mt-4">
        Comments
      </h1>
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
        {filterComments.map((comment) => (
          <li
            key={comment.id}
            className="border border-black hover:bg-green-400 rounded-md p-4"
          >
            <h1 className="text-md">Id: {comment.id}</h1>
            <h1>Name: {comment.name}</h1>
            <h1>E-mail: {comment.email}</h1>
            <h1>Body: {comment.body}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
