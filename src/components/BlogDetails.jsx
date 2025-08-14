import { useParams, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8080/blogs/" + id);

  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8080/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {/* <h2>Blog Details - {id}</h2> */}
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <div className="blog-description">{blog.description}</div>
          <p>Written By: {blog.Author}</p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
