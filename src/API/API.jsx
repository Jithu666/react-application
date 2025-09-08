import React, { useEffect, useState } from "react";
import axios from "axios";

const API = () => {
  //   const [userDetails, setUserDetails] = useState(null);
  const [randomDog, setRandomDog] = useState(null);
  //   const [randomCat, setRandomCat] = useState(null);
  //   const [randomAdvice, setRandomAdvice] = useState(null);
  //   const [randomJoke, setRandomJoke] = useState(null);
  //   const [randomTrivia, setRandomTrivia] = useState(null);

  const user = async () => {
    try {
      // {/* Get Random User Details.. */}
      //   const userDetails = await axios.get("https://randomuser.me/api/");
      //   setUserDetails(userDetails.data.results[0]);
      //   console.log(userDetails);

      //  {/* Get Random Dog Image */}
      const randomDogImage = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setRandomDog(randomDogImage.data.message);
      console.log(randomDogImage);

      //   {/* Get Random Cat Image */}
      //   const randomCat = await axios.get(
      //     "https://api.thecatapi.com/v1/images/search"
      //   );
      //   console.log(randomCat);
      //   setRandomCat(randomCat.data[0]);

      //   {/* Get Random piece of Advice */}
      //   const randomAdvice = await axios.get("https://api.adviceslip.com/advice");
      //   //   console.log(randomAdvice);
      //   setRandomAdvice(randomAdvice.data.slip.advice);

      //   {/* Get random Joke API */}
      //   const randomJoke = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=single");
      //   console.log(randomJoke);
      //   setRandomJoke(randomJoke.data);

      // {/* Get Random Trivia Question */}
      //   const ranodomTrivia = await axios.get(
      //     "https://opentdb.com/api.php?amount=1&type=multiple"
      //   );
      //   setRandomTrivia(randomTrivia);
      //   console.log(randomTrivia);
    } catch (error) {
      console.log(error.message);
    }
  };

  // {/* Get Random Advice */}

  useEffect(() => {
    user();
    console.log("Use Effect hook rendered");
  }, []);

  return (
    <div className="flex items-center flex-col p-8 m-auto bg-gray-300 text-black h-screen">
      {/* Get Random User details */}
      {/* <h1>Random user details API</h1>
      {userDetails ? (
        <img src={userDetails.picture.large} alt="" />
      ) : (
        <p>Loading Random User Details...</p>
      )} */}

      {/* Random Dog Image */}
      <h1>Random Dog Image API</h1>
      {randomDog ? (
        <img src={randomDog} alt="" className="max-h-screen" />
      ) : (
        <p>Loading Random Dog Image...</p>
      )}

      {/* Get Random Cat Image */}
      {/* <h1>Random Cat Image API</h1>
      {randomCat ? (
        <img src={randomCat.url} alt="" className="w-screen" />
      ) : (
        <p>Loading Random Cat Image...</p>
      )} */}

      {/* Get Random piece of Advice */}
      {/* <h1>Random Advice API</h1>
      {randomAdvice ? (
        <h2 className="flex justify-center items-center flex-col">
          {randomAdvice}
        </h2>
      ) : (
        <p>Loading Advice...</p>
      )} */}

      {/* Get Random Joke */}
      {/* <h2>Random Joke API</h2>
      {randomJoke ? (
        <>
          <p>Category: {randomJoke.category}</p>
          <p>Joke: {randomJoke.joke}</p>
        </>
      ) : (
        <p>Loading Random Joke from a Random Category</p>
      )} */}

      {/* Get Random Trivia Question */}
      {/* <h2>Getting Random Trivia Question.</h2>
      {randomTrivia ? (
        <>
          <h2>Category: {randomTrivia.category}</h2>
          <h2>Question: {randomTrivia.question}</h2>
          <h2>Answer: {randomTrivia.answer}</h2>
        </>
      ) : (
        <p>Loading Trivia Question...</p>
      )} */}
    </div>
  );
};

export default API;
