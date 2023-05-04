import React from "react";
import { Link, Route } from "react-router-dom";
import BreweriesPage from "./BreweriesPage";
import SearchList from "./SearchList";
import PageNotFound from "./PageNotFound";

const HomePage = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/breweries">Breweries</Link>
        <Link to="/search">Search</Link>
      </nav>
    </div>
  );
};

export default HomePage;