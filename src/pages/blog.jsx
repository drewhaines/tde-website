import React from "react";
import { Container, Box, Grid, Heading, Text } from "theme-ui";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Blog = () => {
  return (
    <Box
      bg="#fff9d6"
      sx={{
        minHeight: ["calc(100vh - 170px)", null, null, "calc(100vh - 190px)"]
      }}
    >
      <Container>
        <Grid
          columns={["1fr", null, "1fr 1fr", "1fr 1fr 1fr"]}
          sx={{
            maxWidth: 1100,
            mx: "auto",
            px: 3,
            pt: [3, null, null, 10],
            pb: [2, null, null, 10],
            gridGap: [3, null, null, 5]
          }}
        >
          {blogPosts.map(blogPost => {
            return (
              <Link key={blogPost.title} to={blogPost.path}>
                <Box
                  sx={{
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    overflow: "hidden",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  }}
                >
                  {blogPost.image}
                  <Box
                    bg="white"
                    p={3}
                    sx={{
                      height: [180, null, null, 240],
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      position: "relative",
                      top: -1,
                      margin: -1
                    }}
                  >
                    <Heading variant="h2" mb={3}>
                      {blogPost.title}
                    </Heading>
                    <Text>{blogPost.description}</Text>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

const blogPosts = [
  {
    title: "How Long To Become a Web Developer?",
    path: "/how-long-to-become-a-web-developer/",
    description:
      "4 months? 6 weeks? Just 3 days? Some people promise to teach you coding in a certain amount of time, but how long does it really take?",
    image: <StaticImage alt="" src="../images/how-long.png" />
  },
  {
    title: "College, Bootcamp, or Self-Taught?",
    path: "/college-bootcamp-or-self-taught/",
    description:
      "Which form of learning is best for you? We discuss the pros and cons of each way to learn code.",
    image: <StaticImage alt="" src="../images/college-bootcamp-thumbnail.png" />
  },
  {
    title: "How to Make $100,000 a Year Freelancing",
    path: "/how-to-make-100-000-a-year-freelancing/",
    description:
      "$100,000 / 48 weeks / 25hrs = $80/hr. This is your target number if you want to comfortablly make 100k.",
    image: <StaticImage alt="" src="../images/100000-thumbnail.png" />
  }
  // {
  //   title: "Top 3 Programming Languages for Beginners",
  //   path: "/top-3-programming-languages-for-beginners/",
  //   description:
  //     "JavaScript, Ruby, and Python. These are the best programming languages for newbies and others in web development.",
  //   image: <StaticImage src="../images/100000-thumbnail.png" />
  // },
];

export default Blog;
