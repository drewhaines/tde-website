import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  Box,
  Container,
  Grid,
  Text,
  Heading,
  Link as ThemeLink
} from "theme-ui";

const About = () => {
  return (
    <Box
      bg="#deefff"
      sx={{
        minHeight: ["calc(100vh - 170px)", null, null, "calc(100vh - 190px)"],
        overflow: "auto"
      }}
      px={[3, null, null, 10]}
      pb={[3, null, null, 10]}
    >
      <Grid variant="centered" mt={10}>
        <Container>
          <Heading variant="h1" as="h1" sx={{ textAlign: "center" }}>
            What is The Dev Experience?
          </Heading>
          <Grid
            columns={["1fr", null, null, "1fr 1fr"]}
            variant="centered"
            pt={[5, 10]}
            mb={0}
          >
            <Text sx={{ fontSize: 28, lineHeight: "42px" }}>
              {`The Dev Experience is a place to learn web development. 

I've created a curated list of resources to learn software development from junior to senior level topics. It's a community where we can support each other and connect with other developers to make our lives better.

I teach my specific development stack, tools, and methodology. This is exactly what I would have taught myself 10 years ago to set my career on track.`}
            </Text>
            <Box my={[3, 0]}>
              <StaticImage src="../images/coding.png" alt="table with code" />
            </Box>
          </Grid>
          <Heading
            variant="h1"
            as="h1"
            mt={[10, 20]}
            sx={{ textAlign: "center" }}
          >
            Why Are You Doing This?
          </Heading>
          <Grid
            columns={["1fr", null, null, "1fr 1fr"]}
            variant="centered"
            pt={[5, 10]}
            mb={0}
          >
            <Text sx={{ fontSize: 28, lineHeight: "34px" }}>
              {`Software literally changed my life. 

I went through a difficult time during college where I could barely make ends meet. When my car broke, I couldn't afford to have a mechanic fix it. I usually couldn't go out to bars with friends in college. There were times when I literally couldn't afford to eat lunch and would just go hungry.

Now I'm doing great.

Learning software made it so I could make my own money and build a real career. It opened lots of doors for me and it can for you too. This is one of the best ways I can share my knowledge and give back to the community.`}
            </Text>
            <Box my={[3, 0]}></Box>
          </Grid>
          <Heading
            variant="h1"
            as="h1"
            mt={[10, 20]}
            sx={{ textAlign: "center" }}
          >
            A Little More About Me
          </Heading>
          <Grid
            columns={["1fr", null, null, "1fr 1fr"]}
            variant="centered"
            pt={[5, 10]}
            mb={0}
          >
            <Box my={[3, 0]}></Box>
            <Text sx={{ fontSize: 28, lineHeight: "42px" }}>
              {`I'm Drew and I run most things at here. 

I have over 10 years worth of software development experience. Most of my work is in HTML, CSS, JS and Ruby. But it always depends on what clients need or what project I'm working on.

Ever since I started tutoring in college, I've felt a passion to teach and help others.`}
            </Text>
            <Text sx={{ fontSize: 28, lineHeight: "42px" }}>
              {`I'm married to Sea-Anna. 

She also does software development.

Sea-Anna actually changed her career from fitness/personal training to software. She went to LEARN Academy, for 4 months, worked for a startup for ~1 year+, and now works for Reviewed.com.

She has a great story and may pop in from time to time.`}
            </Text>
            <Box></Box>
            <Box></Box>
            <Text sx={{ fontSize: 28, lineHeight: "42px" }}>
              {`Aside from coding I have a few hobbies.  

I love surfing. It's such a good mix between physical and mental excercise. Reading waves helps heighten your awareness which is important in coding and business. Big surf is challenging and 

Running and working out is a big part of my life. Since we sit all day as software developers, it's important to get out of your chair and treat your body right.

I love hanging with friends and family. The relationships we have are more important than we think.`}
            </Text>
          </Grid>
          <Heading
            variant="h1"
            as="h1"
            mt={[10, 20]}
            sx={{ textAlign: "center" }}
          >
            Health, Wealth, Love, and Happiness
          </Heading>
          <Grid
            columns={["1fr", null, null, "1fr"]}
            variant="centered"
            pt={[5, 10]}
            mb={0}
          >
            <Text
              sx={{ fontSize: 28, lineHeight: "42px", px: [5, null, null, 20] }}
            >
              {`Life isn't all about coding and making money. 
              
To have a good life, you need to balance your time between multiple buckets. If you're super rich but literally can't get out of bed, what good is the money? If your super healthy but are broke, that sucks too. 
              
That's why in addition to teaching coding, I'll include lessons you don't normally see on coding sites. Things like taking care of your health, your relationships, your goals, and just being happy.`}
            </Text>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
};

export default About;
