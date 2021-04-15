import React from "react";
import { Box, Grid } from "theme-ui";

const About = () => {
  return (
    <Box
      bg="#deefff"
      sx={{
        height: ["calc(100vh - 170px)", null, null, "calc(100vh - 190px)"],
        overflow: "auto"
      }}
    >
      <Grid variant="centered" mt={5}>
        <h1>About</h1>
      </Grid>
    </Box>
  );
};

export default About;
