import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/index.css";
import App from "./App";
import About from "./components/About";
import Advertise from "./components/Advertise";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/">
          <Advertise />
        </Route>
      </Switch>
    </Router>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <ReactRouterSetup />
  </React.StrictMode>,
  document.getElementById("root")
);
