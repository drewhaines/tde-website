import React from "react";
import { jsx, Box, Heading, Text } from "theme-ui";

const courseData = [
  {
    title: "Git & Github",
    description:
      "Learn the busics of Git and set up your Github account. Master git workflows to use versioncontrol to effectively manage your code."
  },
  {
    title: "Intro to Web Development",
    description:
      "New developers start here. Learn to build and deploy webpages using HTML, CSS, and JavaScript."
  },
  {
    title: "JavaScript and Node JS",
    description:
      "Strengthen your JavaScript fundamentals and build modern apps with just vanilla JavaScript."
  },
  {
    title: "Modern Apps in React",
    description:
      "React is the most popular JavaScript framework. Learn the fundamentals of React and how to use it to build applications."
  },
  {
    title: "Ruby on Rails",
    description:
      "Ruby on Rails is a popular framework. Learn the fundamentals of React and how to use it to build applications."
  },
  {
    title: "Security for Web Apps",
    description:
      "There's a lot to know about React. This course covers more advanced features found in modern apps."
  },
  {
    title: "Performance and Web Vitals",
    description:
      "There's a lot to know about React. This course covers more advanced features found in modern apps."
  },
  {
    title: "Getting Paid",
    description:
      "Now that you have some skills, it's time to start getting paid. This covers how to get hired or find contracts."
  }
];

const Course = props => {
  const { course } = props;
  return (
    <Box className="course" bg="white" mx="auto" mb={[3, null, null, "40px"]}>
      <Heading mb={2}>{course.title}</Heading>
      <Text>{course.description}</Text>
    </Box>
  );
};

const Courses = () => {
  return (
    <Box
      class="padding courses"
      pt={[5, null, null, "50px"]}
      pb={[5, null, null, "1px"]}
      px={3}
      sx={{
        backgroundColor: "#ffe0ff",
        backgroundImage: "linear-gradient(225deg, #ffe0ff 0%, #97D9E1 100%)"
      }}
    >
      {courseData.map(course => (
        <Course course={course} />
      ))}
    </Box>
  );
};

export default Courses;
