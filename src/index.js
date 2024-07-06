import { createRoot } from "react-dom/client";
import React from "react";
import "./styles/index.css";

import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);