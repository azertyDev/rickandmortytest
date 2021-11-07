import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useFetchAllEpisodesQuery } from "../../../services/apiService";
import { IEpisode } from "../../../models/IEpisode";

export const Episodes = () => {
  const [page, setPage] = useState(0);
  const { data: episodes, isLoading } = useFetchAllEpisodesQuery({ page });

  const { results } = episodes || {};

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Air date</TableCell>
            <TableCell align="center">Episode</TableCell>
            <TableCell align="center">Characters</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results?.map((row: IEpisode) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.air_date}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.episode}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.characters.length}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <Button
              onClick={handlePrevClick}
              variant="outlined"
              disabled={page === 0}
            >
              prev
            </Button>
            <Button onClick={handleNextClick} variant="outlined">
              next
            </Button>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
