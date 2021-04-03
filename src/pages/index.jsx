import React from "react";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  jsx,
  Box,
  Container,
  Grid,
  Text,
  Flex,
  Heading,
  Link as ThemeLink
} from "theme-ui";

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
                <button class="btn_main_cta">
                  Let's Code <span className="margin_left_10">🚀</span>
                </button>
              </Link>
            </Box>
          </Grid>
          <Grid columns={["1fr", null, null, "450px 1fr"]} variant="centered">
            <Box ml={[0, 10]} mt={4}>
              <Box mb={[3, 6]}>
                <Text variant="h2">Learn to code</Text>
              </Box>
              <Box mb={[3, 6]}>
                <Text variant="h2">Build your own apps</Text>
              </Box>
              <Text variant="h2">Monetize your skills</Text>
            </Box>
            <Box
              sx={{
                ml: [1, 5],
                mt: [5, 8],
                px: [3, 0],
                maxWidth: ["100%", 450]
              }}
            >
              <StaticImage
                src="../images/programming.png"
                alt="learn to code"
              />
            </Box>
          </Grid>
          <Grid variant="centered" mt={[10, 20]} px={5}>
            <Text variant="h1" mb={4}>
              Why learn to code?
            </Text>
            <Grid
              columns={["1fr", null, null, "500px 1fr"]}
              variant="centered"
              mt={[0, 5]}
              pb={20}
              gap={10}
            >
              <Box sx={{ maxWidth: "500px" }}>
                <Text variant="h2" mb={1}>
                  Great pay
                </Text>
                <Text mb={7}>
                  {
                    "Juniors to Mid-level make ~$65-90k in USA, CA. \nSeniors and Leads are closer to $100-150k in USA, CA. \nIt can be much more at high profile companies."
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
                    "The longer you work as a developer, the more skills you learn. \nThis increases your value and income over time.\n\nNot all jobs are like this. If you're a janitor, you don't make an extra $20k more for being there for 3 years."
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
                <Text mb={0}>
                  {
                    "All entrepreneurs should have some knowledge of code. \n\nKnowing how to code is a huge advantage that gives you the ability to build websites, apps, and ideas for your businesses."
                  }
                </Text>
              </Box>
              <Box sx={{ mx: "auto", maxWidth: ["100%", 500] }}>
                <StaticImage src="../images/coding.png" alt="table with code" />
              </Box>
            </Grid>
          </Grid>
          <Grid variant="centered" mt={0} pb={20} px={5}>
            <Text variant="h1" sx={{ fontSize: ["30px", "32px"] }}>
              What do I teach and why?
            </Text>
            <Grid
              columns={["1fr", null, null, "auto 1fr"]}
              sx={{ gap: ["20px", "50px"], mt: 10, justifyItems: "center" }}
            >
              <Box>
                <Text variant="h2" className="text-center">
                  HTML, CSS, and JS
                </Text>
                <Box sx={{ maxWidth: 250, mt: 8, mx: "auto" }}>
                  <StaticImage
                    src="../images/html-css-js.png"
                    alt="html css and js logo"
                  />
                </Box>
              </Box>
              <Box mb={[5, 0]} mr="auto">
                <Text mb={2}>
                  HTML, CSS, and JavaScript are the core languages of the web.
                </Text>
                <Text mb={2}>
                  <ThemeLink
                    href="https://www.w3schools.com/html/"
                    target="blank"
                  >
                    HTML
                  </ThemeLink>
                  {
                    " is used to tell the browser WHAT is on the page (text, images, videos)."
                  }
                </Text>
                <Text mb={2}>
                  <ThemeLink
                    href="https://www.w3schools.com/css/"
                    target="blank"
                  >
                    CSS
                  </ThemeLink>
                  {
                    " is used to STYLE the page (colors, background colors, font sizes, spacing)."
                  }
                </Text>
                <Text mb={2}>
                  <ThemeLink
                    href="https://www.w3schools.com/js/DEFAULT.asp"
                    target="blank"
                  >
                    JavaScript
                  </ThemeLink>
                  {
                    " is used to MANIPULATE the page to make it interactive (hide/show items on click)."
                  }
                </Text>
              </Box>
              <Box>
                <Text variant="h2" className="text-center">
                  Computers & Dev Tools
                </Text>
                <Box sx={{ maxWidth: 250, mt: 8, mx: "auto" }}>
                  <StaticImage
                    src="../images/dev-tools.png"
                    alt="developer tools"
                  />
                </Box>
              </Box>
              <Box mb={[5, 0]} mr="auto">
                <Text mb={2}>
                  All developers use computers and a common set of tools for
                  their work. This includes:
                </Text>
                <Text mb={2}>
                  <Text>
                    - your computer and operating system (Mac, Windows, Linux).
                  </Text>
                  <Text>
                    {"- a code editor like "}
                    <ThemeLink
                      href="https://code.visualstudio.com/"
                      target="blank"
                    >
                      VS Code
                    </ThemeLink>
                    .
                  </Text>
                  <Text>
                    {"- using the terminal to run commands and programs "}(
                    <ThemeLink
                      href="https://github.com/0nn0/terminal-mac-cheatsheet"
                      target="blank"
                    >
                      basic mac commands
                    </ThemeLink>
                    /
                    <ThemeLink
                      href="https://code.visualstudio.com/"
                      target="blank"
                    >
                      basic windows commands
                    </ThemeLink>
                    ).
                  </Text>
                  <Text>
                    {"- "}
                    <ThemeLink href="https://git-scm.com/" target="blank">
                      Git
                    </ThemeLink>
                    {
                      " for version control. Git allows you to save your code in a way that lets you go back and view the code at any point in time during a project."
                    }
                  </Text>
                  <Text>
                    {"- "}
                    <ThemeLink href="https://github.com/" target="blank">
                      Github
                    </ThemeLink>
                    {" to share code and collaborate with other developers."}
                  </Text>
                  <Text>
                    {"- Google and "}
                    <ThemeLink href="https://github.com/" target="blank">
                      StackOverflow
                    </ThemeLink>
                    {" to find solutions to common coding problems."}
                  </Text>
                  <Text mb={2}>
                    - some understanding of{" "}
                    <ThemeLink
                      href="https://en.wikipedia.org/wiki/Web_browser"
                      target="blank"
                    >
                      browsers
                    </ThemeLink>
                    ,{" "}
                    <ThemeLink
                      href="https://en.wikipedia.org/wiki/Server_(computing)"
                      target="blank"
                    >
                      servers
                    </ThemeLink>
                    , and the{" "}
                    <ThemeLink
                      href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
                      target="blank"
                    >
                      HTTP protocol
                    </ThemeLink>
                    .
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text variant="h2" className="text-center">
                  React
                </Text>
                <Box sx={{ maxWidth: 130, mt: 5, mx: "auto", mb: [0, 5] }}>
                  <StaticImage src="../images/react.png" alt="react logo" />
                </Box>
              </Box>
              <Box mb={[5, 0]} mr="auto">
                <Text mb={2}>
                  <ThemeLink href="https://reactjs.org/" target="blank">
                    React
                  </ThemeLink>
                  {
                    " is one of the main JavaScript frontend libraries/frameworks (Angular, React, and Vue)."
                  }
                </Text>
                <Text mb={2}>
                  A{" "}
                  <Text sx={{ display: "inline", fontWeight: "bold" }}>
                    {"library"}
                  </Text>{" "}
                  is a reusable set of code written by another developer so we
                  don't have to reinvent the wheel everytime we start a new
                  project. A{" "}
                  <Text sx={{ display: "inline", fontWeight: "bold" }}>
                    {"framework"}
                  </Text>{" "}
                  is set of patterns, files/folders, and rules that help
                  standardize applications so we can build faster.
                </Text>
                <Text mb={2}>
                  React leverages "components" and "state" to build complex,
                  interactive webpages. There's lots of demand for React related
                  work in the job market right now.
                </Text>
              </Box>
              <Box>
                <Text variant="h2" className="text-center">
                  Node JS
                </Text>
                <Box sx={{ maxWidth: 200, mt: [3, 5], mx: "auto", mb: [0, 5] }}>
                  <StaticImage src="../images/node-js.png" alt="node js logo" />
                </Box>
              </Box>
              <Box mb={[5, 0]} mr="auto">
                <Text mb={2}>
                  <ThemeLink href="https://nodejs.org/en/" target="blank">
                    Node JS
                  </ThemeLink>
                  {
                    ' is a "JavaScript runtime" that allows you to use JavaScript for your backend.'
                  }
                </Text>
                <Text mb={2}>
                  Software development is commonly split into 2 groups, frontend
                  and backend. The{" "}
                  <Text sx={{ display: "inline", fontWeight: "bold" }}>
                    {"frontend"}
                  </Text>{" "}
                  is code that runs on the browser and is responsible for things
                  like displaying items on the page. The{" "}
                  <Text sx={{ display: "inline", fontWeight: "bold" }}>
                    {"backend"}
                  </Text>{" "}
                  is code that runs on the server and is responsible for things
                  like saving data to a database or interacting with APIs.
                </Text>
                <Text mb={2}>
                  Node JS comes with a package manager called npm. This helps
                  you easily install and use JS libraries.
                </Text>
              </Box>
              <Box>
                <Text variant="h2" className="text-center">
                  Ruby on Rails
                </Text>
                <Box sx={{ maxWidth: 200, mx: "auto", mt: 5, mb: [0, 5] }}>
                  <StaticImage
                    src="../images/rails.png"
                    alt="ruby on rails logo"
                  />
                </Box>
              </Box>
              <Box mb={[5, 0]} mr="auto">
                <Text mb={2}>
                  <ThemeLink href="https://rubyonrails.org/" target="blank">
                    Ruby on Rails
                  </ThemeLink>
                  {" is a backend framework built in "}
                  <ThemeLink
                    href="https://www.ruby-lang.org/en/"
                    target="blank"
                  >
                    Ruby
                  </ThemeLink>
                  .
                </Text>
                <Text mb={2}>Rails is my preferred backend.</Text>
                <Text mb={2}>
                  It speeds up development and organizes your code so it's easy
                  to maintain.
                </Text>
              </Box>
              <Box>
                <Text variant="h2" className="text-center">
                  Deployment
                </Text>
                <Box sx={{ maxWidth: 200, mx: "auto", mt: 7, mb: 5 }}>
                  <StaticImage src="../images/deploy.png" alt="learn to code" />
                </Box>
              </Box>
              <Box mb={[5, 0]} mr="auto">
                <Text mb={2}>
                  Once you have an app built, you need somewhere to host/serve
                  it on the internet.
                </Text>
                <Text mb={2}>
                  The service you use for deployment depends on the type of app
                  you're deploying.
                </Text>
                <Text mb={2}>
                  I recommend{" "}
                  <ThemeLink href="https://www.heroku.com/" target="blank">
                    Heroku
                  </ThemeLink>
                  ,{" "}
                  <ThemeLink href="https://www.netlify.com/" target="blank">
                    Netlify
                  </ThemeLink>
                  ,{" and "}
                  <ThemeLink href="https://vercel.com/" target="blank">
                    Vercel
                  </ThemeLink>{" "}
                  depending on what your building.
                </Text>
                <Text mb={2}>
                  All these services integrate with Git/Github so code changes
                  trigger deployments that update your live site.
                </Text>
              </Box>
              {/* <Text mb={[5, 0]}>
                
                I recommend Heroku and Netlify. 
              </Text> */}
              <Box>
                <Text variant="h2" className="text-center">
                  Security
                </Text>
                <Box sx={{ maxWidth: 100, mx: "auto", mt: 5 }}>
                  <StaticImage src="../images/lock.png" alt="learn to code" />
                </Box>
              </Box>
              <Text mb={[5, 0]}>
                When you start building apps for the web, you find out there are
                bots, scripts, and people constantly attacking or spamming your
                site. I teach you the basics of security for web applications.
              </Text>
              <Box>
                <Text variant="h2" className="text-center">
                  Performance
                </Text>
                <Box sx={{ maxWidth: 200, mx: "auto", mt: 5, mb: [3, 5] }}>
                  <StaticImage
                    src="../images/lighthouse.png"
                    alt="learn to code"
                  />
                </Box>
              </Box>
              <Text mb={[5, 0]}>
                Nobody likes a slow site. I cover how to check how fast your app
                is loading, the tools used to identify bottlenecks, and
                expected/average response times.
              </Text>
              <Box>
                <Text variant="h2" className="text-center">
                  Getting Paid
                </Text>
                <Box sx={{ maxWidth: 165, mx: "auto", mt: 7 }}>
                  <StaticImage src="../images/money.png" alt="learn to code" />
                </Box>
              </Box>
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
              <Box sx={{ position: "relative", maxWidth: [400] }}>
                <StaticImage src="../images/drew.jpg" alt="drew" />
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
