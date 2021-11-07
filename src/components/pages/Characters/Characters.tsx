import { Button, CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useFetchAllCharacterQuery } from "../../../services/apiService";
import { CustomCard } from "../../common/CustomCard/CustomCard";

export const Characters = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetchAllCharacterQuery({ page });

  const { results } = data || {};

  return (
    <div>
      <Grid container spacing={2}>
        {isLoading ? (
          <Box display="flex">
            <p>isLoading...</p>
            <CircularProgress />
          </Box>
        ) : (
          results?.map((item) => (
            <Grid item xs={3} key={item.id}>
              <CustomCard {...item} />
            </Grid>
          ))
        )}
        <Grid item xs={12} container justifyContent="center">
          <Button
            onClick={() => setPage(page - 1)}
            variant="outlined"
            disabled={page === 1}
          >
            prev
          </Button>
          <Button onClick={() => setPage(page + 1)} variant="outlined">
            next
          </Button>
        </Grid>
      </Grid>

      {/* <Pagination count={pageCount} variant="outlined" color="primary" /> */}
    </div>
  );
};
