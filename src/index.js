import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import routing from "./routes";

const router = routing;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
