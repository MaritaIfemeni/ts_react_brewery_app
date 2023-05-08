import { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";

import { Brewery } from "../types/types";

//Pagination is in progress, issue passing the props.
const BreweryList = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  useEffect(() => {
    axios
      .get<Brewery[]>("https://api.openbrewerydb.org/breweries")
      .then((response) => {
        setBreweries(response.data);
      });
  }, []);
  //  const handleChangePage = (
  //    event: MouseEvent<HTMLButtonElement> | null,
  //    newPage: number
  //  ) => {
  //    setPage(newPage);
  //  };
  //  const handleChangeRowsPerPage = (
  //    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //  ) => {
  //    setRowsPerPage(parseInt(event.target.value, 10));
  //    setPage(0);
  //  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, breweries.length - page * rowsPerPage);

  return (
    <div>
      <h1>Breweries</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>More Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? breweries.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : breweries
          ).map((brewery) => (
            <TableRow key={brewery.id}>
              <TableCell>{brewery.name}</TableCell>
              <TableCell>{brewery.city}</TableCell>
              <TableCell>
                <Link to={`/breweries/${brewery.id}`}>
                  <button>Details</button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      {/* <TablePagination>
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          component="div"
          count={breweries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        </TablePagination> */}
    </div>
  );
};

export default BreweryList;
