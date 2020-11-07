import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GraphQl } from "./Graphql/Graphgl";

ReactDOM.render(
  <React.StrictMode>
    <GraphQl>
      <App />
    </GraphQl>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
