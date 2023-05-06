import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Brewery } from "../types/types";

const BreweryList = () => {
    const [breweries, setBreweries] = useState<Brewery[]>([]);

    useEffect(() => {
      axios.get<Brewery[]>("https://api.openbrewerydb.org/breweries").then((response) => {
        setBreweries(response.data);
      });
    }, []);
  
    return (
      <div>
        <h1>Breweries</h1>
        <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
             <Link to={`/breweries/${brewery.id}`}>
            <h2>{brewery.name}</h2>
          </Link>
            <p>{brewery.brewery_type}</p>
            <p>{brewery.city}, {brewery.state}, {brewery.country}</p>
          </li>
        ))}
        </ul>
      </div>
    );
  }

export default BreweryList;
