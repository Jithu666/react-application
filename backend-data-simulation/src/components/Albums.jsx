import { useState } from "react";
import useFetch2 from "../hooks/useFetch2";

const Albums = () => {
  const url = "https://jsonplaceholder.typicode.com/albums";

  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useFetch2(url);

  if (loading)
    return (
      <p className="flex justify-center items-center text-6xl cursor-progress pt-20">
        Loading...
      </p>
    );

  if (error)
    return <p className="flex justify-center items-center">{error.message}</p>;

  const filterAlbums = data.filter((album) => album.id > 23 && album.id < 49);

  const filteredAlbums = data.filter((album) => {
    return (
      album.id.toString().includes(searchTerm) ||
      album.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h1 className="flex justify-center underline text-3xl font-bold text-red-500 m-6">
        Albums
      </h1>

      {/* Search Input Box */}
      <input
        type="text"
        className="flex ml-auto mr-10 border rounded-2xl pr-20 px-2 py-1.5"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter Id or Title."
      />

      {/* Using Flex box to arrange the cards. */}
      {/* <ul className="flex flex-wrap gap-4">
        {data.map((album) => (
          <li
            key={album.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-100 p-4 border rounded m-6"
          >
            <h1>Id: {album.id}</h1>
            <h1>Title: {album.title}</h1>
          </li>
        ))}
      </ul> */}

      {/* Using Grid to arrange the cards. */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-6">
        {/*  {filterAlbums.map((album) => (
          <li
            key={album.id}
            className="border border-black hover:border-green-400 p-4 rounded"
          >
            <h1>Id: {album.id}</h1>
            <h1>Title: {album.title}</h1>
          </li>
        ))} */}

        {/* Search Input Field to filter and display only the cards which has matching Id or Matching Title. */}
        {filteredAlbums.map((album) => (
          <li key={album.id} className="border-2 border-black rounded-lg p-4">
            <h1>Id: {album.id}</h1>
            <h1>Title: {album.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
