import React from "react";
import { Link, Outlet } from "react-router-dom";


const HomePage = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/breweries">Breweries</Link>
        <Link to="/search">Search</Link>
        <Link to="/breweries/id">BreweriesPic</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomePage;
