import React from "react";
import { Heading, Grid } from "theme-ui";

const CourseTemplate = ({ pathContext: { course } }) => {
  return (
    <Grid variant="centered" mt={[5, null, null, 10]} px={[3, null, null, 5]}>
      <Heading variant="h2" sx={{ fontSize: ["24px", null, 5] }}>
        {course.title}
      </Heading>
    </Grid>
  );
};

export default CourseTemplate;
