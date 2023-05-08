import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TextField,
  Button,
} from "@mui/material";

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
  const [error, setError] = useState("");
  useEffect(() => {
    if (debouncedSearchTerm) {
      axios
        .get<Brewery[]>(
          `https://api.openbrewerydb.org/breweries?by_city=${debouncedSearchTerm}`
        )
        .then((response) => {
          setBreweries(response.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setBreweries([]);
    }
  }, [debouncedSearchTerm]);
  if (error) {
    return <p>{error}</p>;
  }
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setShowList(true);
  };
  const handleLinkClick = () => {
    setSearchTerm("");
    setShowList(false);
    const input = document.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    if (input) {
      input.value = "";
    }
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
        <h2>Find a brewery near you!</h2>
        <TextField
          id="outlined-basic"
          label="Serch Breweries By City"
          variant="outlined"
          onChange={handleSearch}
        />
        {showList && (
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="brewery-table"
          >
            <TableBody>
              {breweries.map((brewery) => (
                <TableRow
                  key={brewery.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {brewery.name}
                  </TableCell>
                  <TableCell>{brewery.city}</TableCell>
                  <TableCell>
                    <Link
                      to={`/breweries/${brewery.id}`}
                      onClick={handleLinkClick}
                    >
                      <Button variant="contained" color="primary">
                        Details
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        <Outlet />
      </main>
      <footer>
        <h6> Find Breweries - Made By marita Ifemeni</h6>
      </footer>
    </div>
  );
};

export default HomePage;
