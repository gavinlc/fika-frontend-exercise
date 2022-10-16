import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FikaSearch from "./FikaSearch";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FikaSearch />
  </React.StrictMode>
);
