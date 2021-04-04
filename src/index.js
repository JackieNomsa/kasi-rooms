import React from "react";
import ReactDOM from "react-dom";
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
