import React from "react";
import { Link } from "gatsby";
import { Box, Heading, Text, Grid } from "theme-ui";

export const courseData = [
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
    path: "/courses/modern-apps-in-react",
    description: (
      <Box>
        <Text mt={4} mb={2}>
          React is one of the most popular JavaScript framework/libraries.
        </Text>
        <Text mb={2}>
          This covers the fundamentals of React and how to use components,
          state, and props to create applications. We'll look at events
          (onClick, onBlur), hooks (useState, useEffect), and other more
          advanced topics.
        </Text>
        <Text>
          In addition to React, we be looking at some React frameworks like
          Create React App, Next.js, and Gatsby.
        </Text>
      </Box>
    )
  },
  {
    title: "Ruby on Rails",
    path: "/courses/ruby-on-rails",
    description: (
      <Box>
        <Text mt={4} mb={2}>
          Ruby on Rails is a popular backend framework for web applications.
        </Text>
        <Text mb={2}>
          This covers the fundamentals of Ruby and Ruby on Rails. We cover Ruby
          basics, the MVC pattern (model, view, controller), routing URLs,
          managing your database with "migrations", generating code using
          "scaffolds", and testing.
        </Text>
        <Text>
          Ruby projects use "gems" (libraries/packages) to share code and
          functionality. We look at common gems like Devise, Pry, and RSpec.
        </Text>
      </Box>
    )
  },
  {
    title: "Security for Web Apps",
    path: "/courses/security-for-web-apps",
    description: (
      <Box>
        <Text mt={4} mb={2}>
          Bots and hackers will constantly try to attack your programs.
        </Text>
        <Text mb={2}>
          We'll look at common attacks that you're apps should be ready for and
          how to use things like honeypots or throttling to prevent issues.
        </Text>
        <Text>
          Different apps are susceptible to different attacks. We'll see how the
          frameworks we choose are important to protecting our apps.
        </Text>
      </Box>
    )
  },
  {
    title: "Performance and Web Vitals",
    path: "/courses/performance-and-web-vitals",
    description: (
      <Box>
        <Text mt={4} mb={2}>
          Performance is becoming an increasingly important metric in web
          development.
        </Text>
        <Text mb={2}>
          We'll look at Lighthouse and PageSpeed Insights to check your "web
          vitals" (LCP, FID, CLS) and how to optimze those metrics based on
          their suggestions.
        </Text>
        <Text>
          We'll also discuss average response times for different frameworks,
          common causes for slowness, and how to scale your applications.
        </Text>
      </Box>
    )
  },
  {
    title: "Getting Paid",
    path: "/courses/getting-paid",
    description: (
      <Box>
        <Text mt={4} mb={2}>
          This covers how to get hired and find contracts.
        </Text>
        <Text mb={2}>
          We look at how to find opportunities, how to prep for interviews, and
          how to get paid. You'll want to be prepared for technical interviews
          and ready to follow up afterwards.
        </Text>
        <Text>
          We'll compare employment vs freelancing/consulting and go over things
          you want to keep in mind if you're building your own apps.{" "}
        </Text>
      </Box>
    )
  }
];

const Course = props => {
  const { course, isLast } = props;
  return (
    <Grid variant="centered" mb={[isLast ? 0 : 3, null, null, "40px"]}>
      <Link
        href={course.path}
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        <Box className="course" bg="white">
          <Heading variant="h2" mb={2}>
            {course.title}
          </Heading>
          <Text>{course.description}</Text>
        </Box>
      </Link>
    </Grid>
  );
};

const Courses = () => {
  return (
    <Box
      class="padding courses"
      pt={[3, null, null, "50px"]}
      pb={[3, null, null, "1px"]}
      px={3}
      sx={{
        bg: "#ffe7e6"
        // backgroundColor: "#ffe0ff",
        // backgroundImage: "linear-gradient(45deg, #ffe0ff 20%, #ffe7e6 100%)"
      }}
    >
      {courseData.map((course, index) => (
        <Course {...{ course, isLast: index === courseData.length - 1 }} />
      ))}
    </Box>
  );
};

export default Courses;
