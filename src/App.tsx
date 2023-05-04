import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Route, RouteProps} from "react-router-dom";
import routes from "./components/routes";



const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App;