import Person from "../props/Person";

const NameList = () => {
  //   const names = ["Aryan", "Mohammed", "Dharmendra"];
  //   const nameList = names.map((name) => <h2>{name}</h2>);

  const persons = [
    {
      id: 1,
      name: "Jithu",
      age: "23",
      skill: "Tableau",
    },
    {
      id: 2,
      name: "Aryan",
      age: "24",
      skill: "Web Developer",
    },
    {
      id: 3,
      name: "Sanju",
      age: "23",
      skill: "Front-office",
    },
    {
      id: 4,
      name: "Rashmi",
      age: "29",
      skill: "QA",
    },
  ];

  const persona = persons.map((person) => <Person person={person} />);

  return (
    <div className="">
      {/* <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1> */}
      {/* {nameList} */}
      {persona}
    </div>
  );
};

export default NameList;
