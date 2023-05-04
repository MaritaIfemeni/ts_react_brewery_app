// use createBrowserRouter to create a router

import React from "react";
import { createBrowserRouter, RouterProvider, Route, RouteProps, RouteObject} from "react-router-dom";
import HomePage from "../views/HomePage";
import BreweriesPage from "../views/BreweriesPage";
import SearchList from "../views/SearchList";
import PageNotFound from "../views/PageNotFound";

const routes: any = createBrowserRouter([  
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/breweries",
        element: <BreweriesPage />
      },
      {
        path: "/search",
        element: <SearchList />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]);

export default routes;