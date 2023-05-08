import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

import { Brewery } from "../types/types";

const BreweryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [brewery, setBrewery] = useState<Brewery>();
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((response) => {
        setBrewery(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);
  if (!brewery) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
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
            <h3>{brewery.name}</h3>
            <p>Address:</p>
            <p>
              {brewery.city}, {brewery.state}, {brewery.country}
            </p>
            <p>
              <a
                href={brewery.website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
              </a>
            </p>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go back Home
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default BreweryDetails;
