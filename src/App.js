import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RandomUser from "./components/pages/RandomUser";
import NotFound from "./components/pages/NotFound.js";
import Landing from "./components/pages/Landing.js";
import TvMaze from "./components/pages/TvMaze.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/random-user" component={RandomUser} />
        <Route exact path="/tv-maze" component={TvMaze} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
