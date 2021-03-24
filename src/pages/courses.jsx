import React from "react";
import { jsx, Box } from "theme-ui";

const courseData = [
  {
    title: "Mastering Git & Github",
    description:
      "Learn the busics of Git and set up your Github account. Master git workflows to use versioncontrol to effectively manage your code."
  },
  {
    title: "Introduction to Web Development",
    description:
      "New developers start here. Learn to build and deploy webpages using HTML, CSS, and JavaScript."
  },
  {
    title: "Build Modern Apps with Vanilla JS",
    description:
      "Strengthen your JavaScript fundamentals and build modern apps with just vanilla JavaScript."
  },
  {
    title: "Introduction to React",
    description:
      "React is the most popular JavaScript framework. Learn the fundamentals of React and how to use it to build applications."
  },
  {
    title: "Professional React",
    description:
      "There's a lot to know about React. This course covers more advanced features found in modern apps."
  },
  {
    title: "Finding Work in the Software Industry",
    description:
      "Now that you have some skills, it's time to start getting paid. This covers how to get hired or find contracts."
  }
];

const Course = props => {
  const { course } = props;
  return (
    <Box className="course" bg="white" mx="auto" mb="40px">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </Box>
  );
};

const Courses = () => {
  return (
    <Box class="padding courses" pt="50px" pb="1px" px={3} bg="aliceblue">
      {courseData.map(course => (
        <Course course={course} />
      ))}
    </Box>
  );
};

export default Courses;
