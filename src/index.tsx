import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GraphQl } from "./Graphql/Graphgl";
import { BeaconeContextProvider } from "./context/BeaconeContext";

ReactDOM.render(
  <React.StrictMode>
    <GraphQl>
      <BeaconeContextProvider>
        <App />
      </BeaconeContextProvider>
    </GraphQl>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
