import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Home } from "../src/components/home/Home";

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 2 }}>
        <Home />
      </Box>
    </Container>
  );
}
