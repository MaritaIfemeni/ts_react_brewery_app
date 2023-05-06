import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Brewery } from "../types/types";


const BreweryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [brewery, setBrewery] = useState<Brewery>();

  useEffect(() => {
    axios.get<Brewery>(`https://api.openbrewerydb.org/breweries/${id}`).then((response) => {
      setBrewery(response.data);
    });
  }, [id]);

  if (!brewery) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{brewery.name}</h2>
      <p>{brewery.brewery_type}</p>
      <p>{brewery.city}, {brewery.state}, {brewery.country} {brewery.website_url}</p>
    </div>
  );
}


export default BreweryDetails;
