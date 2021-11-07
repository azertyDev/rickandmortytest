import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { IEpisode } from "../../../models/IEpisode";
import { useFetchAllEpisodesQuery } from "../../../services/apiService";

export const Episodes = () => {
  const [page, setPage] = useState(1);
  const { data: episodes, isLoading } = useFetchAllEpisodesQuery({ page });

  const { results } = episodes || {};

  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
            <TablePagination
              colSpan={4}
              count={results?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
