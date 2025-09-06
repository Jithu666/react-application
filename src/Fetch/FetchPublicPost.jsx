import React, { useState, useEffect } from "react";

const FetchPublicPost = () => {
  const [body, setBody] = useState(null);
  const [title, setTitle] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setBody(data[0].body);
        setTitle(data[0].title);

        setPosts(data.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <div>
      <h3>Fetch Public Post</h3>
      <br />
      {/* {title ? (
        <p>
          Title: {title} <br /> <br />
          Body: {body}
        </p>
      ) : (
        <p>Loading..</p>
      )} */}

      {posts ? (
        posts.map((post) => (
          <li key={post.id} style={{ listStyle: "none" }}>
            <strong>Title: {post.title}</strong>
            <br />
            <strong>Post: {post.body}</strong>
            <br />
            <br />
            <hr />
          </li>
        ))
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default FetchPublicPost;
