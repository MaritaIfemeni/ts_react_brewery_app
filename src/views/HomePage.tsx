import React from "react";
import { Link, Outlet } from "react-router-dom";


const HomePage = () => {
  return (
    <div>
      <header>
      <h1 className="title">For Brewery Lovers</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Detailed Search</Link>
          <Link to="/id">Contact</Link>
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
