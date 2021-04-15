import React from "react";
import { Box, Grid } from "theme-ui";

const Hire = () => {
  return (
    <Box
      bg="#e2fff1"
      sx={{
        height: ["calc(100vh - 170px)", null, null, "calc(100vh - 190px)"],
        overflow: "auto"
      }}
    >
      <Grid variant="centered" mt={5}>
        <h1>Hire Me</h1>
      </Grid>
    </Box>
  );
};

export default Hire;
