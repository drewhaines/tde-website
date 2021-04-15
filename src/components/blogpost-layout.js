import React from "react";
import { Box, Container, Grid } from "theme-ui";

export default ({ children }) => (
  <Box
    bg="#fff9d6"
    sx={{
      height: ["calc(100vh - 170px)", null, null, "calc(100vh - 190px)"],
      overflow: "auto"
    }}
  >
    <Container sx={{ maxWidth: "800px" }} mt={[3, null, null, 10]} px={3}>
      <div>{children}</div>
    </Container>
  </Box>
);
