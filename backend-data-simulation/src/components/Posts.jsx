import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const Posts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const postsPerPage = 10;

  const { data, loading, error } = useFetch(url);

  const filteredPosts = data
    .filter((post) => post.id <= 100)
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  if (error)
    return <p className="flex justify-center items-center">Error: {error}</p>;

  return (
    <div>
      {/* Converting the Object into String */}
      <h1 className="text-2xl text-red-700 flex justify-center m-auto pt-2 font-bold underline">
        Posts
      </h1>

      <input
        type="text"
        value={searchTerm}
        placeholder="Enter post title to search"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex border-2 rounded-3xl hover:border-orange-500 px-4 py-2 pr-20 ml-auto mr-6"
      />

      {/* Container to display Posts fetched from Backend API. */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {/* Renders the  entire list of Data onto the browser window. */}
        {/* {data.map((post) => (
          <li
            key={post.id}
            className="border-2 border-black hover:border-orange-300 p-4 rounded m-4"
          >
            <h1 className="font-normal">Id: {post.id}</h1>
            <p className="font-medium">Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </li>
        ))} */}

        {/* Renders the filtered entire list of Data onto the browser window. */}
        {loading ? (
          <p className="flex justify-center items-center">Loading...</p>
        ) : (
          currentPosts.map((post) => (
            <li
              key={post.id}
              className="border-2 border-black hover:border-orange-300 p-4 rounded-lg"
            >
              <h1 className="font-normal">Id: {post.id}</h1>
              <p className="font-medium">Title: {post.title}</p>
              <p>Body: {post.body}</p>
            </li>
          ))
        )}
      </ul>

      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={endIndex >= filteredPosts.length}
          className="text-white border bg-green-400 px-4 py-2 rounded-lg hover:bg-green-500 hover:cursor-pointer font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
