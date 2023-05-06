import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";
import BreweryList from "./BreweryList";
import PageNotFound from "./PageNotFound";
import BreweryDetails from "./BreweryDetails";

const routes: any = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/breweries",
        element: <BreweryList />,
      },
      {
        path: "/breweries/:id",
        element: <BreweryDetails />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default routes;