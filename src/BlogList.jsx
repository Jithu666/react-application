const BlogList = ({ blogs, title, hideBlogs }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <strong>
            Title: {blog.title}, Author: {blog.Author}
          </strong>
          <br />
          <p>Description: {blog.description}</p>
          <br />
          <button
            onClick={() => {
              hideBlogs(blog.id);
            }}
          >
            Hide Blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
