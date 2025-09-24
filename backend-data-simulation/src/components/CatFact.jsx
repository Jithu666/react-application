import useFetch3 from "../hooks/useFetch3";

const CatFact = () => {
  const url = "https://catfact.ninja/fact";

  const { data, loading, error } = useFetch3(url);

  //   if (loading)
  //     return (
  //       <p className="flex justify-center items-center text-6xl text-yellow-500 font-serif mt-10">
  //         Loading...
  //       </p>
  //     );

  if (error)
    return (
      <p className="flex justify-center items-center text-6xl text-red-500">
        Error: {error.toString()}
      </p>
    );

  return (
    <div>
      <h1 className="flex justify-center text-4xl underline pt-20">Cat Fact</h1>
      <h1 className="flex justify-center items-center p-6">
        <strong className="text-xl text-gray-900 pr-6">Fact: </strong> <br />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p className="text-xl text-black">{data.fact}</p>
        )}
      </h1>
    </div>
  );
};

export default CatFact;
