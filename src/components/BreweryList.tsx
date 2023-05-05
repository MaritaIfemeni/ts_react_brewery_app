import React from "react";

import { BreweryDetails } from "../types/Types";
import breweryListing from "../components/breweryListing";

interface Props {
  data: BreweryDetails[];
}

const BreweryList = ({ data }: Props) => {
  return (
    <div>
      <h1>Brewery List</h1>
      <ul>
        {data.map((brewery: BreweryDetails) => (
          <li key={brewery.id}>
            <a href={`/breweries/${brewery.id}`}>{brewery.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
const BreweryDetailsList = breweryListing(
  BreweryList,
  "https://api.openbrewerydb.org/breweries?per_page=3"
);

export default BreweryDetailsList;
