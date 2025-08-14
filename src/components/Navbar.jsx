import { Link } from "react-router-dom";
// import Home from "./Home";

const Navbar = () => {
  // const [name, setName] = useState("Jithu");
  // const [age, setAge] = useState(22);

  // const handleNameChange = () => {
  //   setName("Jithendra");
  // };

  // const handleAgeChange = () => {
  //   setAge(23);
  // };

  return (
    <nav className="navbar">
      <Link to="/">
        <p className="heading1">Blog</p>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        {/* <button onClick={handleNameChange}>Change Name</button> 
         <button onClick={handleAgeChange}>Change Age</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
