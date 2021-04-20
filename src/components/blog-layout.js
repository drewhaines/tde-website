import React from "react";
import { Box, Container, Grid } from "theme-ui";

export default ({ children }) => (
  <Box
    bg="#fff9d6"
    sx={{
      minHeight: ["calc(100vh - 170px)", null, null, "calc(100vh - 190px)"],
      fontSize: ["20px"],
      "&&& h1": {
        fontSize: ["30px", null, null, "42px"]
      },
      "&&& h2": {
        mb: 0
      },
      "&&& pre": {
        pl: ["0px !important"]
      },
      "& pre span": {
        fontSize: [2, null, null, 2]
      },
      "& p code": {
        color: "dark",
        bg: "#ff8d85",
        fontSize: [2, null, null, 3]
      },
      "& a": {
        color: "blue",
        paddingBottom: "1px",
        borderBottom: "1px solid",
        borderColor: "blue"
      }
    }}
  >
    <Container
      sx={{ maxWidth: "900px" }}
      pt={[3, null, null, 10]}
      px={3}
      pb={[3, null, null, 10]}
    >
      <div>{children}</div>
    </Container>
  </Box>
);
