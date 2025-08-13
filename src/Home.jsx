import BlogList from "./BlogList";
// import Student from "./props/Student";
import useFetch from "./hooks/useFetch";

const Home = () => {
  const {
    data: Blog,
    isLoading,
    errorState,
  } = useFetch("http://localhost:8080/blogs");

  return (
    <div className="home">
      {errorState && <div>{errorState}</div>}
      {isLoading && <div>Loading...</div>}
      <BlogList blogs={Blog} title={"All Blogs"} />
      {/* <Student title={"Students List"} /> */}
    </div>
  );
};

export default Home;
