import React from "react";
import SEO from "../components/seo";
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
          <Grid variant="centered" mt={0} pb={10} px={5}>
            <Text variant="h1" sx={{ fontSize: ["30px", null, null, "46px"] }}>
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
                    " is used to tell the browser what is on the page (text, images, videos)."
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
                    " is used to style the page (colors, background colors, font sizes, spacing)."
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
                    " is used to manipulate the page to make it interactive (hide/show items on click)."
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
                  their work.
                </Text>
                <Text mb={1}>This includes:</Text>
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
                  React is a library that uses "components", "state", and
                  "props" to build complex, interactive webpages. There's lots
                  of demand for React related work in the job market right now.
                </Text>
                <Text mb={2}>
                  Frameworks like{" "}
                  <ThemeLink href="https://nextjs.org/" target="blank">
                    Next.js
                  </ThemeLink>{" "}
                  or{" "}
                  <ThemeLink
                    href="https://www.gatsbyjs.com/docs/"
                    target="blank"
                  >
                    Gatsby
                  </ThemeLink>{" "}
                  are used with React to create really fast and efficient
                  websites/apps. They handle things like URL routing, optimizing
                  images, and optimizing production builds.
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
                  {' is a "JavaScript runtime" built on '}
                  <ThemeLink href="https://v8.dev/" target="blank">
                    Chrome's V8 JavaScript engine
                  </ThemeLink>
                  {
                    " . It has a varity of uses in web development and is necessary to build modern JS apps. "
                  }
                </Text>
                <Text mb={2}>
                  Node JS comes with a package manager called{" "}
                  <ThemeLink href="https://www.npmjs.com/about" target="blank">
                    npm
                  </ThemeLink>
                  . This helps you easily install and use JS libraries. All
                  projects that utilize npm packages have a config file called{" "}
                  <ThemeLink
                    href="https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/"
                    target="blank"
                  >
                    package.json
                  </ThemeLink>
                  {
                    " that allow you to specify what libraries you need and which version."
                  }
                </Text>
                <Text mb={2}>
                  Node.js can also be used as a server for your backend.{" "}
                  <ThemeLink
                    href="https://stackoverflow.com/questions/7440379/what-exactly-is-the-meaning-of-an-api"
                    target="blank"
                  >
                    Express.js
                  </ThemeLink>{" "}
                  is the most common framework for Node.js backends and lets you
                  do things like save data to a database or integrate with other
                  people's{" "}
                  <ThemeLink
                    href="https://stackoverflow.com/questions/7440379/what-exactly-is-the-meaning-of-an-api"
                    target="blank"
                  >
                    APIs (application programming interfaces)
                  </ThemeLink>
                  .
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
                <Text mb={2}>
                  It speeds up development and organizes your code so it's easy
                  to maintain.
                </Text>
                <Text mb={2}>
                  Rails is built around a pattern called MVC (model, view,
                  controller).{" "}
                  <Text sx={{ display: "inline", fontWeight: "bold" }}>
                    {"Models"}
                  </Text>{" "}
                  are files that represent objects and define the
                  attributes/logic for those objects.{" "}
                  <Text sx={{ display: "inline", fontWeight: "bold" }}>
                    {"Views"}
                  </Text>{" "}
                  are how the objects are displayed to the user (usually HTML or
                  JSON).{" "}
                  <Text sx={{ display: "inline", fontWeight: "bold" }}>
                    {"Controllers"}
                  </Text>{" "}
                  are responsible for routing (redirects, 404s) and interating
                  with models (saving/updating objects).
                </Text>
                <Text mb={2}>
                  Rails teaches a lot of great best practices, is popular for
                  web development, and is a great skill in your developer
                  toolbelt.{" Read more on "}
                  <ThemeLink
                    href="https://en.wikipedia.org/wiki/Ruby_on_Rails"
                    target="blank"
                  >
                    Wikipedia
                  </ThemeLink>
                  .
                </Text>
                <Text mb={2}></Text>
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
                  </ThemeLink>{" "}
                  for Rails and Node.js apps ,{" "}
                  <ThemeLink href="https://www.netlify.com/" target="blank">
                    Netlify
                  </ThemeLink>{" "}
                  for React apps built with Gatsby ,{" and "}
                  <ThemeLink href="https://vercel.com/" target="blank">
                    Vercel
                  </ThemeLink>{" "}
                  for React apps built with Next.js. All these services
                  integrate with Git/Github so code changes trigger deployments
                  that update your live site.
                </Text>
                <Text mb={2}>
                  Services like{" "}
                  <ThemeLink href="https://aws.amazon.com/ec2" target="blank">
                    AWS
                  </ThemeLink>{" "}
                  or{" "}
                  <ThemeLink
                    href="https://www.digitalocean.com/"
                    target="blank"
                  >
                    Digital Ocean
                  </ThemeLink>{" "}
                  can also be used and give you more control over the server.
                  However, I highly recommend going with one of the above
                  services because they reduce a lot of unnecessary work and
                  will save you a ton of time.
                </Text>
              </Box>
              <Box>
                <Text variant="h2" className="text-center">
                  Security
                </Text>
                <Box sx={{ maxWidth: 100, mx: "auto", mt: 5 }}>
                  <StaticImage src="../images/lock.png" alt="learn to code" />
                </Box>
              </Box>
              <Box mb={[5, 0]} mr="auto">
                <Text mb={2}>
                  When you start building apps for the web, you learn there are
                  bots, scripts, and people constantly attacking or spamming
                  your site.
                </Text>

                <Text mb={2}>
                  We'll look at some basics of{" "}
                  <ThemeLink
                    href="https://www.cloudflare.com/learning/security/what-is-web-application-security/"
                    target="blank"
                  >
                    web application security
                  </ThemeLink>{" "}
                  and{" what the heck is "}
                  <ThemeLink
                    href="https://owasp.org/www-project-top-ten/"
                    target="blank"
                  >
                    OWASP
                  </ThemeLink>{" "}
                  {" (Open Web Application Security Project)"}.
                </Text>
                <Text mb={2}>
                  The frameworks we work in (Next.js, Rails) have some security
                  built in and try to filter out dangerous requests. However,
                  you always needs to keep security in mind when handling
                  sensitive data.
                </Text>
              </Box>
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
              <Box mb={[5, 0]} mr="auto">
                <Text mb={2}>Nobody likes a slow site.</Text>
                <Text mb={2}>
                  Plus Google is starting to rank search results based on their
                  performance metrics.
                </Text>
                <Text mb={2}>
                  We'll look at how to use{" "}
                  <ThemeLink
                    href="https://developers.google.com/web/tools/lighthouse"
                    target="blank"
                  >
                    Lighthouse
                  </ThemeLink>{" "}
                  and{" "}
                  <ThemeLink
                    href="https://developers.google.com/speed/pagespeed/insights/"
                    target="blank"
                  >
                    PageSpeed Insights
                  </ThemeLink>{" "}
                  {
                    " to check how fast your app is loading and how to identify bottlenecks."
                  }
                </Text>
                <Text mb={2}>
                  We'll also discuss average response times for different
                  frameworks, common causes for slowness, and how to scale your
                  applications.
                </Text>
              </Box>
              <Box>
                <Text variant="h2" className="text-center">
                  Getting Paid
                </Text>
                <Box sx={{ maxWidth: 165, mx: "auto", mt: 7 }}>
                  <StaticImage src="../images/money.png" alt="learn to code" />
                </Box>
              </Box>
              <Box mb={[5, 0]} mr="auto">
                <Text mb={2}>
                  It's important to know how you're going to make money.
                </Text>
                <Text mb={2}>
                  Do you want to work as an employee for a tech company?
                </Text>
                <Text mb={2}>
                  Do you want to consult/freelance to have more control over
                  your time?
                </Text>
                <Text mb={2}>
                  Do you want to build an app and charge money for it?
                </Text>
                <Text mb={2}>
                  We'll look at the pros/cons of different career paths and the
                  steps to be successful in each. The process isn't immeditate,
                  but if you put in the time and develop your skills, you'll be
                  able to find work.
                </Text>
              </Box>
            </Grid>
          </Grid>
          <Grid variant="centered" mt={10} pb={[5, null, null, 10]} px={5}>
            <Text variant="h1">Why learn from me?</Text>
            <Grid
              columns={["1fr", null, null, "auto 1fr"]}
              sx={{ gap: ["25px", "50px"], mt: 10 }}
            >
              <Box sx={{ position: "relative", maxWidth: [400] }}>
                <StaticImage src="../images/drew.jpg" alt="drew" />
              </Box>
              <Box mb={[0, 0]} mr="auto">
                <Text mb={2}>
                  Hey, I'm Drew <span className="margin_left_5">👋</span>
                </Text>
                <Text mb={2}>
                  I love teaching and have over 10 years worth of web
                  development experience. I've built multiple software
                  businesses (
                  <ThemeLink href="http://www.dmdevco.com/" target="blank">
                    DevCo
                  </ThemeLink>
                  {" & "}
                  <ThemeLink
                    href="https://www.learnacademy.org/"
                    target="blank"
                  >
                    HoursLogger
                  </ThemeLink>
                  ) and worked as an senior developer for Fairway Technologies
                  before they were acquired by{" "}
                  <ThemeLink
                    href="https://www.accenture.com/us-en/services/software-engineering/product-platform-engineering"
                    target="blank"
                  >
                    Accenture
                  </ThemeLink>
                  .
                </Text>
                <Text mb={2}>
                  I'm unique because I have college, self-taught, and bootcamp
                  experience.
                </Text>
                <Text mb={2}>
                  I went to SDSU for ⚡ Electrical Engineering ⚡ but I consider
                  myself to be mostly self taught. HTML/CSS/JS, Git, Github,
                  Ruby on Rails and Node JS were not taught in my curriculum.
                  The vast majority of what I learned was online.
                </Text>
                <Text mb={2}>
                  I also have experiece with web development bootcamps. I help
                  mentor junior engineers in the internship program at{" "}
                  <ThemeLink
                    href="https://www.learnacademy.org/"
                    target="blank"
                  >
                    LEARN Academy
                  </ThemeLink>{" "}
                  in San Diego. Bootcamps are great if you need a more
                  hands-on/classroom setting, but they can be a pretty big time
                  and money commitment.
                </Text>
                <Text mb={2}>
                  I don't pretend to know everything and I don't just skip to
                  solutions. One of the hardest things to learn in coding is how
                  to solve your own problems. You'll see exactly what I Google
                  and how I debug issues that come up.
                </Text>
                <Text mb={0}>
                  I give you the practical stuff you need to know and the
                  resources to learn more. This is the path I wish someone
                  taught me when I was learning to code.
                </Text>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
