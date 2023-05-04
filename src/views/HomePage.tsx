import React from "react";
import { Link, Outlet } from "react-router-dom";
import BreweriesPage from "./BreweriesPage";

const HomePage = () => {
  return (
    <div>
      <header>
      <h1 className="title">For Brewery Lovers</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/breweries">Breweries</Link>
          <Link to="/search">Search</Link>
          <Link to="/breweries/id">BreweriesPic</Link>
          <Link to="*">Pagenot</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h3> Footer here</h3>
      </footer>
    </div>
  );
};

export default HomePage;
