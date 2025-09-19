import { useState } from "react";
import FetchUsers from "./components/FetchUsers";
import IncreaseCounter from "./hooks/IncreaseCounter";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetch("/db.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`Error ${response.status}: ${response.statusText}`);
  //       }
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log("Fetched Data: ", json);
  //       setData(json);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   <h2>Loading...</h2>;
  // }

  // if (error) {
  //   <h2>Error: {error}</h2>;
  // }

  // const filterUsers1 = data.filter((user) =>
  //   user.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const filterUsers = data.filter((user) => user.id < 25);

  // useEffect(() => {
  //   fetch("/db.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(res));
  // }, []);

  return (
    <div>
      {/* <h1 className="ml-6 font-black text-red-800 text-2xl underline hover:text-orange-600 pb-2 mt-6">
        Filtered To-Do's
      </h1> */}

      {/* <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 ml-96 w-72"
        placeholder="Enter Search term here."
      /> */}

      <ul>
        {/* {data.map((user) => (
          <li key={user.id} className="ml-10">
            {user.id} - <strong>{user.title}</strong>
          </li>
        ))} */}

        {/* {filterUsers.map((users) => (
          <li key={users.id} className="ml-10">
            <strong>
              {users.id} - {users.title}
            </strong>
          </li>
        ))} */}
      </ul>
      {/* <li>Unique key:{crypto.randomUUID()}</li> */}
      {/* <FetchUsers /> */}

      {/* <p className="text-3xl text-orange-300 underline">
        Window Width: {count}
      </p> */}
      <IncreaseCounter />
    </div>
  );
};

export default App;
