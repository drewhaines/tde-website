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
      pb={[8, null, null, 10]}
    >
      <Grid variant="centered" mt={[5, null, null, 10]}>
        <Container>
          <Heading variant="h1" as="h1" sx={{ textAlign: "center" }}>
            What Is The Dev Experience?
          </Heading>
          <Grid
            columns={["1fr", null, null, "1fr 1fr"]}
            variant="centered"
            pt={[5, 10]}
            mb={0}
          >
            <Text
              sx={{
                fontSize: ["22px", null, null, "24px"],
                lineHeight: ["24px", null, null, "28px"]
              }}
            >
              {`The Dev Experience is a place to learn web development online. 

It's a curated list of resources that range from junior to senior level topics. This is a community where we can support each other and connect with other developers to make our lives better.

I teach my specific development stack, tools, and methodology. This is exactly what I would have taught myself 10 years ago to set my career on the right track.`}
            </Text>
            <Box my={[3, 0]}>
              <Box sx={{ "& > div": { maxWidth: 220, borderRadius: "10px" } }}>
                <StaticImage
                  src="../images/tde_logo.png"
                  alt="table with code"
                />
              </Box>
            </Box>
          </Grid>
          <Heading
            variant="h1"
            as="h1"
            mt={[10, 20]}
            sx={{ textAlign: "center" }}
          >
            Why Does It Exist?
          </Heading>
          <Grid
            columns={["1fr", null, null, "1fr 1fr"]}
            variant="centered"
            pt={[5, 10]}
            mb={0}
          >
            <Text
              sx={{
                fontSize: ["22px", null, null, "24px"],
                lineHeight: ["24px", null, null, "28px"]
              }}
            >
              {`Software literally changed my life. 

I went through a difficult time during college where I could barely make ends meet. When my car broke, I had to fix it myself because I couldn't afford a mechanic. I was embarrassed that I couldn't pay to go to events or trips with friends. There were times when I couldn't even afford to eat and would just go hungry.

Fast foward a few years and I'm doing way better.

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
            A Little About Me
          </Heading>
          <Grid
            columns={["1fr", null, null, "1fr 1fr"]}
            variant="centered"
            pt={[5, 10]}
            mb={0}
          >
            <Box my={[3, 0]}></Box>
            <Text
              sx={{
                fontSize: ["22px", null, null, "24px"],
                lineHeight: ["24px", null, null, "28px"]
              }}
            >
              {`I'm Drew and I run most things at The Dev Experience. 

I have over 10 years worth of software development experience. Most of my work is in HTML, CSS, JS and Ruby. But it always depends on what clients need or what project I'm working on.

Ever since I started tutoring in college, I've felt a passion to teach and help others.`}
            </Text>
            <Text
              sx={{
                fontSize: ["22px", null, null, "24px"],
                lineHeight: ["24px", null, null, "28px"]
              }}
            >
              {`I'm married to Sea-Anna. 

She also does software development.

Sea-Anna changed her career from fitness/personal training to software. She went to LEARN Academy, for 4 months, worked for a startup for 1 year+, and has worked at Reviewed for over 3 years.`}
            </Text>
            <Box></Box>
            <Box></Box>
            <Text
              sx={{
                fontSize: ["22px", null, null, "24px"],
                lineHeight: ["24px", null, null, "28px"]
              }}
            >
              {`I love surfing. It's such a good mix of a physical and mental excercise. Reading waves helps heighten your awareness which is important in coding and business. Practicing good balance helps 

Running and working out is also a big part of my life. Since we sit all day as software developers, it's important to get out of your chair and treat your body right.

I unapologetically put stickers on all the things. Here are a few of my favorite sticker packs.`}
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
              sx={{
                fontSize: ["22px", null, null, "24px"],
                lineHeight: ["24px", null, null, "28px"],
                px: [5, null, null, 20]
              }}
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
