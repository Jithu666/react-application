// import Person from "../props/Person";

const NameList = () => {
  //   const names = ["Aryan", "Mohammed", "Dharmendra"];
  //   const nameList = names.map((name) => <h2>{name}</h2>);

  // const persons = [
  //   {
  //     id: 1,
  //     name: "Jithu",
  //     age: "23",
  //     skill: "Tableau",
  //   },
  //   {
  //     id: 2,
  //     name: "Aryan",
  //     age: "24",
  //     skill: "Web Developer",
  //   },
  //   {
  //     id: 3,
  //     name: "Sanju",
  //     age: "23",
  //     skill: "Front-office",
  //   },
  //   {
  //     id: 4,
  //     name: "Rashmi",
  //     age: "29",
  //     skill: "QA",
  //   },
  // ];

  const names = [
    "Aryan",
    "Dharmendra",
    "Mohammed Tayyab",
    "Vikas",
    "Yagnyesh Ajagiya",
  ];

  // const persona = persons.map((person) => (
  //   <Person key={person.id} person={person} />
  // ));

  // const persona1 = names.map((name) => <Person name={name} />);

  const namesList = names.map((name, index) => (
    <h2 key={index}>
      {index}. {name}
    </h2>
  ));

  return (
    <div className="">
      {/* <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1> */}
      {/* {nameList} */}
      {/* {persona} */}
      {/* {persona1} */}
      {namesList}
    </div>
  );
};

export default NameList;
