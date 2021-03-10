import React from "react";
import SEO from "../components/seo";
import Programming from "../components/images/programming";
import Coding from "../components/images/coding";
import { Link } from "gatsby";
import { jsx, Box, Container, Grid, Text, Flex, Heading } from "theme-ui";

const HomePage = () => {
  return (
    <div>
      <SEO title="Become a web developer | The Dev Experience" />
      <div className="main_section">
        <Container>
          <Grid
            columns={["1fr", null, null, "1fr 1fr"]}
            variant="centered"
            pt={50}
            mb={0}
          >
            <Heading variant="h1" as="h1">
              {"Become a "}
              <br className="show_xs" />
              <span className="highly_skilled">{"highly skilled "}</span>
              <br />
              software developer
            </Heading>
            <Box>
              <Link to="/courses">
                <button class="btn_main_cta btn_success">Get Started</button>
              </Link>
            </Box>
          </Grid>
          <Grid columns={["1fr", null, null, "450px 1fr"]} variant="centered">
            <Box ml={50} mt={20}>
              <Box mb={30}>
                <Text variant="h2">Learn modern technologies</Text>
              </Box>
              <Box mb={30}>
                <Text variant="h2">Build your own apps</Text>
              </Box>
              <Text variant="h2">Monetize your skills</Text>
            </Box>
            <Box>
              <Programming />
            </Box>
          </Grid>
          <Grid variant="centered" mt={50} pb={100}>
            <Text variant="h1" mb={20}>
              Why learn to code?
            </Text>
            <Grid columns="1fr 1fr" variant="centered" mt={50} pb={100}>
              <Box>
                <Text mb={10}>
                  Great pay - Juniors to Mid-level make ~$65-90k. Seniors and
                  Leads are closer to 100-150k. Much more at higher profile
                  companies.
                </Text>
                <Text>Your skills and value compound</Text>
                <Text>Ability to work remote with flexible hours</Text>
                <Text>It's fun to create things </Text>
                <Text>It's fun to create things </Text>
                <Text>No degree required</Text>
              </Box>
              <Coding />
            </Grid>
          </Grid>
          <Grid variant="centered" mt={50} pb={100}>
            <Text variant="h1">What do I teach and why?</Text>
          </Grid>
          <Grid variant="centered" mt={50} pb={100}>
            <Text variant="h1">Why learn from me?</Text>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
