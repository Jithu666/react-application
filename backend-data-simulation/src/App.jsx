import { useState } from "react";
// import FetchUsers from "./components/FetchUsers";
// import IncreaseCounter from "./components/IncreaseCounter";
// import useWindowWidth from "./hooks/useWindowWidth";
import Weather from "./components/Weather";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Albums from "./components/Albums";
import CatFact from "./components/CatFact";
import DogImage from "./components/DogImage";
import AdviceSlip from "./components/AdviceSlip";
import JokeAPI from "./components/JokeAPI";

const App = () => {
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
        {" "}
        Window Width: {width}
      </p> */}
      {/* <IncreaseCounter /> */}

      {/* 19/09/2025 -> Fetching data from json api and rendering it to browser. */}

      <Weather />
      {/* <Users /> */}

      {/* 22/09/2025 -> Fetching data from json api and rendering it to browser. */}
      {/* <Posts /> */}
      {/* <Comments /> */}
      {/* <Albums /> */}
      {/* <CatFact /> */}

      {/* 23/09/2025 */}
      {/* <DogImage /> */}

      {/* 24/09/2025 */}
      {/* <AdviceSlip /> */}
      {/* <JokeAPI /> */}
    </div>
  );
};

export default App;
