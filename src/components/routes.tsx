import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../views/HomePage";
import BreweriesPage from "../views/BreweriesPage";
import SearchList from "../views/SearchList";
import PageNotFound from "../views/PageNotFound";
import ContactForm from "../views/ContactForm";

const routes: any = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <BreweriesPage />,
      },
      {
        path: "/id",
        element: <ContactForm />,
      },
      {
        path: "/search",
        element: <SearchList />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default routes;
