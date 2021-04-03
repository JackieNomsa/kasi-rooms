import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/index.css";
import App from "./App";

const ReactRouterSetup = () => {
  return <App />;
};
ReactDOM.render(
  <React.StrictMode>
    <ReactRouterSetup />
  </React.StrictMode>,
  document.getElementById("root")
);
