import React, { useState, useEffect } from "react";

const FetchPokemon = () => {
  //   const [data, setData] = useState([]);
  //   const [url, setUrl] = useState(null);
  //   const [height, setHeight] = useState(0);
  //   const [weight, setWeight] = useState(0);
  //   const [url1, setUrl1] = useState(null);
  const [ability, setAbility] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
        // const url = "https://pokeapi.co/api/v2/pokemon/";
        // const url = "https://pokeapi.co/api/v2/pokedex/national";
        const url = "https://pokeapi.co/api/v2/ability/overgrow";

        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        // setData(data);
        // setHeight(data.height);
        // setWeight(data.weight);
        // setUrl(data.sprites.front_default);
        // setUrl1(data.sprites.back_default);
        setAbility(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      {/* {data.map((data, index) => (
        <li key={index} style={{ listStyle: "none" }}>
          {data.name}
        </li>
      ))} */}

      {/* {data.name} */}
      {/* <p>Pikachu's Height: {height}</p>
      <p>Pikachu's Weight: {weight}</p> */}

      {/* {data ? (
        <img src={url} alt="Pikachu  Image" width={"520px"} />
      ) : (
        <p>Loading..</p>
      )}

      {data ? (
        <img src={url1} alt="Pikachu's Back Default" width={"400px"} />
      ) : (
        <p>Loading..</p>
      )} */}

      {/* {data} */}

      <h1>Ability Overgrow</h1>

      {ability ? (
        <ul>
          {ability.names.map((item, index) => (
            <li key={index}>
              {item.language.name}: {item.name}
            </li>
          ))}{" "}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchPokemon;
