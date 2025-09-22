import React from "react";
import useFetch from "../hooks/useFetch";

const Posts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const { data, loading, error } = useFetch(url);

  const filterPosts = data.filter((post) => post.id < 24);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Converting the Object into String */}
      {/* {JSON.stringify(data)} */}
      <h1 className="text-2xl text-red-700 flex justify-center m-auto pt-2 font-bold underline">
        Posts
      </h1>
      {/* Container to display Posts fetched from Backend API. */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Renders the  entire list of Data onto the browser window. */}
        {data.map((post) => (
          <li
            key={post.id}
            className="border-2 border-black hover:border-orange-300 p-4 rounded m-4"
          >
            <h1 className="font-normal">Id: {post.id}</h1>
            <p className="font-medium">Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </li>
        ))}

        {/* Renders the filtered entire list of Data onto the browser window. */}
        {filterPosts.map((post) => (
          <li
            key={post.id}
            className="border-2 border-black hover:border-orange-300 p-4 rounded m-4"
          >
            <h1 className="font-normal">Id: {post.id}</h1>
            <p className="font-medium">Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
