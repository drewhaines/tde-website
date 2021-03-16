import React from "react";
import SEO from "../components/seo";
import Programming from "../components/images/programming";
import Coding from "../components/images/coding";
import DrewImage from "../components/images/drew-image";
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
            pt={[5, 10]}
            mb={0}
          >
            <Heading variant="h1" as="h1">
              {"Become a "}
              <br className="show_xs" />
              <span className="highly_skilled">{"highly skilled "}</span>
              <br />
              software developer
            </Heading>
            <Box my={[3, 0]}>
              <Link to="/courses">
                <button class="btn_main_cta btn_success">Get Started</button>
              </Link>
            </Box>
          </Grid>
          <Grid columns={["1fr", null, null, "450px 1fr"]} variant="centered">
            <Box ml={10} mt={4}>
              <Box mb={[3, 6]}>
                <Text variant="h2">Learn modern technologies</Text>
              </Box>
              <Box mb={[3, 6]}>
                <Text variant="h2">Build your own apps</Text>
              </Box>
              <Text variant="h2">Monetize your skills</Text>
            </Box>
            <Box>
              <Programming />
            </Box>
          </Grid>
          <Grid variant="centered" mt={[8, 20]} px={5}>
            <Text variant="h1" mb={4}>
              Why learn to code?
            </Text>
            <Grid
              columns={["1fr", null, null, "500px 1fr"]}
              variant="centered"
              mt={[0, 5]}
              pb={20}
            >
              <Box sx={{ maxWidth: "500px" }}>
                <Text variant="h2" mb={1}>
                  Great pay
                </Text>
                <Text mb={7}>
                  {
                    "Juniors to Mid-level make ~$65-90k. \nSeniors and Leads are closer to $100-150k. \nIt can be much more at high profile companies."
                  }
                </Text>
                <Text variant="h2" mb={1}>
                  Ability to work remote with flexible hours
                </Text>
                <Text mb={7}>
                  {
                    "Flexiblity varies from job to job, but coding is definitly a career that is open to working remote."
                  }
                </Text>
                <Text variant="h2" mb={1}>
                  Your skills and value compound
                </Text>
                <Text mb={7}>
                  {
                    "The longer you work as a developer, the more skills you learn. \nThis increases your value and $$$ over time."
                  }
                </Text>
                <Text variant="h2" mb={1}>
                  No degree required
                </Text>
                <Text mb={7}>
                  {
                    "I know plenty of people that got into coding without a college degree. A degree helps for some positions, but most of web development is learned online. "
                  }
                </Text>
                <Text variant="h2" mb={1}>
                  Business opportunities
                </Text>
                <Text mb={7}>
                  {
                    'Knowing how to code give you the ability to build websites, apps, and ideas for your businesses. \n\nIf you don\'t have an idea, just wait for how many of your friends will "have an idea for an app".'
                  }
                </Text>
              </Box>
              <Box mx="auto">
                <Coding />
              </Box>
            </Grid>
          </Grid>
          <Grid variant="centered" mt={10} pb={20} px={5}>
            <Text variant="h1">What do I teach and why?</Text>
            <Grid
              variant="centered"
              columns={["1fr", null, null, "auto 1fr"]}
              sx={{ gap: "50px", mt: 10 }}
            >
              <Text variant="h2">HTML, CSS, and JS</Text>
              <Text>
                HTML, CSS, and JavaScript are the core languages of the web.
                HTML is what is on the screen (text, images, videos). CSS is how
                it looks (colors, background colors, font sizes, spacing).
                JavaScript is the programming language that allows you to make
                the page interactive.
              </Text>
              <Text variant="h2">{"Computers & Dev Tools"}</Text>
              <Text>
                All developers use computers and a common set of tools for their
                work. This includes a code editor, the terminal, Git (version
                control), Github (website to save/view code). I cover some
                important concepts in computing, the most common commands, and
                my recommended setup.
              </Text>
              <Text variant="h2">React</Text>
              <Text>
                React is one of the main JavaScript frontend frameworks
                (Angular, React, and Vue). It leverages "components" and "state"
                to build more complex webpages. There's lots of demand for React
                related work in the job market right now.
              </Text>
              <Text variant="h2">Node JS</Text>
              <Text>
                Node JS allows you to use JavaScript for your backend. The
                frontend is responsible for displaying items on the page. The
                backend is responsible for saving data to a database and
                interacting with APIs.
              </Text>
              <Text variant="h2">Deployment</Text>
              <Text>
                Once you have an app built, you need somewhere to host/serve it.
                I recommend Heroku and Netlify. You can integrate them with
                Git/Github so code changes trigger deployments that update your
                live site.
              </Text>
              {/* <Text variant="h2">Ruby on Rails</Text>
              <Text>
                Ruby on Rails is a backend framework built in Ruby. Rails is my
                preferred backend. It speeds up development and organizes your
                code so it's easy to maintain.
              </Text> */}
              <Text variant="h2">Getting Paid</Text>
              <Text>
                It's important to know how you're going to make money. Do you
                want to work as an employee for a tech company? Do you want to
                consult/freelance and have more control over your time? Do you
                want to build an app and charge money for it?
              </Text>
            </Grid>
          </Grid>
          <Grid variant="centered" mt={10} pb={10} px={5}>
            <Text variant="h1">Why learn from me?</Text>
            <Grid
              variant="centered"
              columns={["1fr", null, null, "auto 1fr"]}
              sx={{ gap: ["25px", "50px"], mt: 10 }}
            >
              <Box sx={{ position: "relative" }}>
                <DrewImage />
              </Box>
              <Text>
                {
                  "There's a bunch of people teaching code, so why me?\n\nI offer simple but detailed explainations. I give you the practical stuff you need to know in an easy to digest format. This is the stuff I wish someone told me when I was learning to code.\n\nYou don't learn code by just watching videos, so you're expected to build projects and follow along.\n\nIf you do your best as a student, I promise to do my best as your teacher."
                }
              </Text>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
