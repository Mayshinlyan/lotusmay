import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreatePost from "./components/createPost";
import EditPost from "./components/editPost";
import PostList from "./components/postList";
import Landing from "./routes/landing";
import Entrepreneurship from "./routes/entrepreneurship";
import Contact from "./components/contactMe";

function App() {
  return (
    <Router>
      <div className="landing">
        <Route path="/" exact component={Landing} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/entrepreneurship" exact component={Entrepreneurship} />
        <Route path="/edit/:id" component={EditPost} />
        <Route path="/create" component={CreatePost} />
      </div>
    </Router>
  );
}

export default App;
