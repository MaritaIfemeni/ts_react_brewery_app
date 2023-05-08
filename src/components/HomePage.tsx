import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

import { Brewery } from "../types/types";

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}

const HomePage = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    if (debouncedSearchTerm) {
      axios
        .get<Brewery[]>(
          `https://api.openbrewerydb.org/breweries?by_city=${debouncedSearchTerm}`
        )
        .then((response) => {
          setBreweries(response.data);
        });
    } else {
      setBreweries([]);
    }
  }, [debouncedSearchTerm]);
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setShowList(true);
  };
  const handleLinkClick = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <header>
        <h1 className="title">For Brewery Lovers</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/breweries"> List of Breweries</Link>
        </nav>
      </header>
      <main>
        <div>
          <input
            type="text"
            placeholder="Search breweries by city"
            onChange={handleSearch}
          />
          {showList && (
            <div>
              {breweries.map((brewery) => (
                <div key={brewery.id}>
                  <Link
                    to={`/breweries/${brewery.id}`}
                    onClick={handleLinkClick}
                  >
                    <h2>{brewery.name}</h2>
                  </Link>
                  <p>{brewery.brewery_type}</p>
                  <p>
                    {brewery.city}, {brewery.state}, {brewery.country}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <Outlet />
      </main>
      <footer>
        <h3> Footer here</h3>
      </footer>
    </div>
  );
};

export default HomePage;
