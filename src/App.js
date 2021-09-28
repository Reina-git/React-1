import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RandomUser from "./components/pages/RandomUser";
import NotFound from "./components/pages/NotFound.js";
import Landing from "./components/pages/Landing.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/random-user" component={RandomUser} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
