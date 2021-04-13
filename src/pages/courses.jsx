import React from "react";
import { jsx, Box, Heading, Text, Link } from "theme-ui";

const courseData = [
  {
    title: "Start Here If You're Brand New",
    path: "/courses/welcome-to-software-development",
    description: (
      <Box>
        <Text mt={4} mb={2}>
          This is an overview of all things software development.
        </Text>
        <Text mb={2}>
          It covers understanding the available technologies, career paths, and
          job market.
        </Text>
        <Text>
          We also get technical and start looking at computers, programs,
          servers and the internet. We'll start installing tools, play with some
          HTML/CSS/JS, and go over other important concepts.
        </Text>
      </Box>
    )
  },
  {
    title: "Git & Github",
    path: "/courses/git-and-github",
    description: (
      <Box>
        <Text mt={4} mb={2}>
          {
            "Git is the tool developers use to save their code. \nGitHub is the website where developers share code online."
          }
        </Text>
        <Text mb={2}>
          There are lots of ways to use Git but this course will cover using Git
          from the command line because I believe it's the most valuable form to
          know.
        </Text>
        <Text>
          We cover important commands like git add, commit, and push. We look at
          what exactly happens during a merge, rebase, and merge conflict. We
          also cover how to get out of sticky situations and easy workflows to
          manage your code.
        </Text>
      </Box>
    )
  },
  {
    title: "Intro to Web Development",
    path: "/courses/intro-to-web-development",
    description: (
      <Box>
        <Text mt={4} mb={2}>
          Learn to build and deploy webpages using HTML, CSS, and JavaScript.
        </Text>
        <Text mb={2}>
          We'll look at the HTML tags and CSS rules you need to know. We'll
          practice building practical things like landing pages for apps,
          restraunts, and other businesses. We'll also use JS to add some
          interaction and fetch data for our sites.
        </Text>
        <Text>
          This is a mixture of the core technologies (HTML/CSS/JS), tools
          (Git/GitHub, debugging, search), and deployment processes (Heroku,
          Netify, Vercel)
        </Text>
      </Box>
    )
  },
  {
    title: "JavaScript and Node JS",
    path: "/courses/javascript-and-nodejs",
    description: (
      <Box>
        <Text mt={4} mb={2}>
          There's a lot to learn about JavaScript.
        </Text>
        <Text mb={2}>
          This course strengthens your JS foundations (variables, loops, JSON)
          and covers some more complex topics (events, listeners, asyn).
        </Text>
        <Text>
          We'll look at Node.js and why we need it to build modern apps. We'll
          use Express.js as a backend to provide data and functionality to our
          web page.
        </Text>
      </Box>
    )
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
    <Link href={course.path} sx={{ textDecoration: "none", color: "inherit" }}>
      <Box className="course" bg="white" mx="auto" mb={[3, null, null, "40px"]}>
        <Heading mb={2}>{course.title}</Heading>
        <Text>{course.description}</Text>
      </Box>
    </Link>
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
