// use createBrowserRouter to create a router

import React from "react";
import { createBrowserRouter, RouterProvider, Route, RouteProps, RouteObject} from "react-router-dom";
import HomePage from "../views/HomePage";
import BreweriesPage from "../views/BreweriesPage";
import SearchList from "../views/SearchList";
import PageNotFound from "../views/PageNotFound";
import BreweriesPic from "../views/BreweriesPic";

const routes: any = createBrowserRouter([  
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/breweries",
        element: <BreweriesPage />,
        children: [
          {
            path: "/breweries/id",
            element: <BreweriesPic />
          }
        ]
      },
      {
        path: "/search",
        element: <SearchList />
      },

    ]
  }, {
    path: "*",
    element: <PageNotFound />
  }

]);

export default routes;