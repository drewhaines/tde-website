const path = require("path");

module.exports = {
  siteMetadata: {
    title: "The Dev Experience",
    description:
      "Become a highly skilled web developer. Learn modern technologies, build your own apps, and find work in the software industry.",
    author: "@drewhaines3",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Rowdies\:400,700`, "lato:400,700"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve("./src/components/layout.js") },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "The Dev Experience",
        short_name: "starter",
        start_url: "/",
        background_color: "#323232",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/tde_icon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
