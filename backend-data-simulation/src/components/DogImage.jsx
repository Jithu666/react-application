import React from "react";
import useFetch4 from "../hooks/useFetch4";

const DogImage = () => {
  const url = "https://dog.ceo/api/breeds/image/random";

  const { data, loading, error } = useFetch4(url, 8);

  const toTitleCase = (str) => {
    return str
      .split(/[-_ ]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  if (error)
    return (
      <p className="m-10 p-10 text-3xl text-red-700 underline">
        {error.message}
      </p>
    );

  return (
    <div className="flex justify-center">
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <p className="flex justify-center text-3xl text-blue-600 underline">
            Loading...
          </p>
        ) : (
          data.map((image) => {
            const breedName = image.message.split("/")[4];
            const capitalizedBreedName = toTitleCase(breedName);
            return (
              <li key={image.message}>
                <h1 className="flex justify-center">
                  Breed: {capitalizedBreedName}
                </h1>
                <img
                  className="flex justify-center items-center text-3xl text-blue-600 underline w-96 h-96 rounded-tr-4xl rounded-br-4xl p-4"
                  alt="Dog image should be placed here."
                  src={image.message}
                />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default DogImage;
