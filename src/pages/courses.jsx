import React from "react";

const courseData = [
  {
    title: "Mastering Git & Github",
    description:
      "Learn the busics of Git and set up your Github account. Master git workflows to use versioncontrol to effectively manage your code.",
  },
  {
    title: "Introduction to Web Development",
    description:
      "New developers start here. Learn to build and deploy webpages using HTML, CSS, and JavaScript.",
  },
  {
    title: "Build Modern Apps with Vanilla JS",
    description:
      "Strengthen your JavaScript fundamentals and build modern apps with just vanilla JavaScript.",
  },
  {
    title: "Introduction to React",
    description:
      "React is the most popular JavaScript framework. Learn the fundamentals of React and how to use it to build applications.",
  },
  {
    title: "Professional React",
    description:
      "There's a lot to know about React. This course covers more advanced features found in modern apps.",
  },
  {
    title: "Finding Work in the Software Industry",
    description:
      "Now that you have some skills, it's time to start getting paid. This covers how to get hired or find contracts.",
  },
];

const Course = (props) => {
  const { course } = props;
  return (
    <div className="course">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
};

const Courses = () => {
  return (
    <div class="padding courses">
      {courseData.map((course) => (
        <Course course={course} />
      ))}
    </div>
  );
};

export default Courses;
