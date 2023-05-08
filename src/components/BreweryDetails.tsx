import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";

import { Brewery } from "../types/types";

const BreweryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [brewery, setBrewery] = useState<Brewery>();
  useEffect(() => {
    axios
      .get<Brewery>(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((response) => {
        setBrewery(response.data);
      });
  }, [id]);
  if (!brewery) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: 4,
            }}
          >
            <h2>{brewery.name}</h2>
            <p>{brewery.brewery_type}</p>
            <p>
              {brewery.city}, {brewery.state}, {brewery.country}{" "}
              {brewery.website_url}
            </p>
            <Link to="/">
              <IconButton aria-label="home">
                <i className="fas fa-home">home</i>
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default BreweryDetails;
