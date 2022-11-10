import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import routing from "./routes";
import "https://kit.fontawesome.com/ef204fd57f.js";

const router = routing;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
