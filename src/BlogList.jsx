import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <strong>{blog.title}</strong>
            <p>Author: {blog.Author}</p>
            <p>Description: {blog.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
