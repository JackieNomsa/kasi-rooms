import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

const ReactRouterSetup = () => {
  return <App />;
};
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ReactRouterSetup />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
