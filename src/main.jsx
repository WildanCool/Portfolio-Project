import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AppRouter from "../src/project/appRouter.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
