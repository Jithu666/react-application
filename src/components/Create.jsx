import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, description: content, Author: author };

    setIsPending(true);

    fetch("http://localhost:8080/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog added");
      setIsPending(false);
      // history.go(-1);
      history.push("/");
    });

    // console.log(blog);
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        {/* <h2>Create New Blog.</h2> */}
        <label>
          <strong>Title: </strong>
        </label>
        <input
          type="text"
          placeholder="Enter Blog Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <br />
        <strong>Content: </strong>
        <textarea
          placeholder="Write Blog here..."
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <br />
        <label>
          <strong>Author:</strong>
        </label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option selected>Select Author</option>
          <option>Narasimha</option>
          <option>Ravi</option>
          <option>Suman</option>
        </select>{" "}
        <br />
        <br />
        {!isPending && <button>Create Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
        {/* <br />
        <br />
        <p>Title: {title}</p>
        <br />
        <br />
        <p>Content: {content}</p>
        <br />
        <br />
        <p>Author: {author}</p> */}
      </form>
    </div>
  );
};

export default Create;
