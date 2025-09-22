import useFetch2 from "../hooks/useFetch2";

const Albums = () => {
  const url = "https://jsonplaceholder.typicode.com/albums";

  const { data, loading, error } = useFetch2(url);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  const filterAlbums = data.filter((album) => album.id > 23 && album.id < 49);

  return (
    <div>
      <h1 className="flex justify-center underline text-3xl font-bold text-red-500 m-6">
        Albums
      </h1>

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
        {filterAlbums.map((album) => (
          <li
            key={album.id}
            className="border border-black hover:border-green-400 p-4 rounded"
          >
            <h1>Id: {album.id}</h1>
            <h1>Title: {album.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
