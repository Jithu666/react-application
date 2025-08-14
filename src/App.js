import Navbar from "./components/Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Student from "./props/Student";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Uncomment Navbar and delete this line after development. */}
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            {/* <Route path="/blog:id">
              <BlogDetails />
            </Route> */}
            <Route path="/blog/:id" component={BlogDetails} />
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
          {/* <Student /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
