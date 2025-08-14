import useFetch from "../hooks/useFetch";

const Student = (props) => {
  const { data, isLoading, errorState } = useFetch(
    "http://localhost:8080/students"
  );

  return (
    <div className="students-preview">
      <h2>{props.title}</h2>

      {errorState && <div>{errorState}</div>}
      {isLoading && <div>Loading...</div>}

      {data &&
        data.map((student) => (
          <div className="student-card" key={student.id}>
            <strong>Name: </strong>
            {student.Name} <br />
            <strong>Age: </strong>
            {student.Age} <br />
            <strong>Student: </strong>
            {String(student.IsStudent)} <br />
          </div>
        ))}
    </div>
  );
};

export default Student;
