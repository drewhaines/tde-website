import React from "react";
import { Grid, Box, Link, Text } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

export const BlogDetails = ({ date, time }) => {
  return (
    <Box mb={"2px"}>
      <Grid
        sx={{ alignItems: "end", gridGap: 1 }}
        columns={"auto auto 1fr"}
        mb={1}
      >
        <Box
          sx={{
            width: "60px",
            height: "60px",
            overflow: "hidden",
            borderRadius: "50%"
          }}
        >
          <StaticImage
            width={60}
            height={60}
            alt="drew-haines-author"
            src="../images/drew-circle-matrix.jpeg"
          />
        </Box>
        <Link
          sx={{ "&&": { pb: 0, borderBottom: "none", fontSize: ["22px"] } }}
          href="https://twitter.com/drewhaines3"
          target="_blank"
        >
          @drewhaines3
        </Link>
        <span />
      </Grid>
      <Text>🗓️ April 20th, 2021</Text>
      <Text>⏱️ 3 min read</Text>
    </Box>
  );
};
