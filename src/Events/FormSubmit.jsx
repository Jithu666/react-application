import React from "react";

const FormSubmit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your Name:</label>
        <input type="text" id="name" />
        <br />
        <br />
        <label htmlFor="age">Enter your Age:</label>
        <input type="text" id="age" />
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormSubmit;
