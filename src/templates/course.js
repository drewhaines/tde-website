import React from "react";
import { Box, Heading, Grid } from "theme-ui";

const CourseTemplate = ({ pathContext: { course } }) => {
  return (
    <Box
      className="main_section"
      sx={{
        minHeight: ["calc(100vh - 170px)", null, null, "calc(100vh - 190px)"],
        overflow: "auto"
      }}
    >
      <Grid variant="centered" mt={[5, null, null, 10]} px={[3, null, null, 5]}>
        <Heading variant="h2" sx={{ fontSize: ["24px", null, 5] }}>
          {course.title}
        </Heading>
      </Grid>
    </Box>
  );
};

export default CourseTemplate;
