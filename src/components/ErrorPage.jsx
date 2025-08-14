import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="not-found">
      <h2>404 Error</h2>
      <p>Page not found</p>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default ErrorPage;
