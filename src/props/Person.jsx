import React from "react";

const Person = ({ person }) => {
  const { name, age, skill } = person;
  return (
    <div>
      <h2>
        Name: {name}, I am {age} years old, I am proficient in {skill}
      </h2>
    </div>
  );
};

export default Person;
