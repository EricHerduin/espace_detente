import React from "react";
import Homepage from "./pages/homepage";
import ErrorPage from "./pages/error-page";
import Wellfare from "./pages/wellfare";
import Product from "./pages/product";
import Contact from "./pages/contact";
import { createBrowserRouter } from "react-router-dom";

const routing = createBrowserRouter([
  {
    path: "Accueil",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "bien-etre",
    element: <Wellfare />,
  },
  {
    path: "product/:_id",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);
export default routing;
