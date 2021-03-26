import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/<kwitter-starter>">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
