import React, { useState } from "react";
import useFetch4 from "../hooks/useFetch4";

const DogImage = () => {
  const url = "https://dog.ceo/api/breeds/image/random";

  const { data, loading, error } = useFetch4(url, 8);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const imagesPerPage = 6;

  const totalPages = data.length / imagesPerPage;

  const startIndex = (page - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentPage = data.slice(startIndex, endIndex);

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
    <>
      <h1 className="flex justify-center items-center text-4xl font-medium underline">
        Dog Images
      </h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Enter Breed Name..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="flex ml-auto border rounded-3xl px-3 py-2 mr-6 pr-20"
      />
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <p className="flex justify-center text-3xl text-blue-600 underline">
              Loading...
            </p>
          ) : (
            currentPage
              .filter((image) => {
                const breedName = image.message.split("/")[4];
                return breedName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              })
              .map((image) => {
                const breedName = image.message.split("/")[4];
                const capitalizedBreedName = toTitleCase(breedName);
                return (
                  <li key={image.message}>
                    <img
                      className="flex justify-center items-center text-3xl text-blue-600 underline w-96 h-96 rounded-tr-4xl rounded-br-4xl p-6"
                      alt="Dog image should be placed here."
                      src={image.message}
                    />
                    <h1 className="flex justify-center">
                      Breed: {capitalizedBreedName}
                    </h1>
                  </li>
                );
              })
          )}
        </ul>

        <div className="fixed bottom-5 left-5">
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page <= 1}
            className="bg-green-300 hover:bg-green-100 rounded-lg px-4 py-2 font-medium"
          >
            Prev
          </button>
        </div>
        <div className="fixed bottom-5 right-5">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page >= totalPages}
            className="bg-green-300 hover:bg-green-100 rounded-lg px-4 py-2 font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default DogImage;
