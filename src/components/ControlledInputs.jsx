import { useState } from "react";

const ControlledInputs = () => {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [select, setSelect] = useState("react");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleOptions = (e) => {
    setSelect(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Form Submitted by ${userName} ${comment} ${select}`);
    alert(`Form Submitted by ${userName} ${comment} ${select}`);
  };

  return (
    <div className="">
      <h2>Form Component</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form">
          <label htmlFor="userName">UserName: </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="textArea">
          <label htmlFor="comments">Comments</label>
          <textarea name="" id="" value={comment} onChange={handleComment} />
        </div>
        <div className="select">
          <label htmlFor="">Topics</label>
          <select name="" id="" value={select} onChange={handleOptions}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledInputs;
