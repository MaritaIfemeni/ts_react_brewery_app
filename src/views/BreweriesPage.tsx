import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import BreweryDetailsList from "../components/BreweryList";

const BreweriesPage = () => {
  return (
    <div>
      <div>
        BreweriesPage
        <form>
          <label htmlFor="header-search">
            <span className="visually-hidden">Search breweries: </span>
          </label>
          <input
            type="text"
            id="header-search"
            placeholder="Search breweries"
            name="s"
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
        <BreweryDetailsList />
        <Outlet />
      </div>
    </div>
  );
};

export default BreweriesPage;
