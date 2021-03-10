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
        fonts: [`Rowdies\:400,700`, "lato:400,700", "pacifico"],
        display: "swap",
      },
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-mdx`,
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
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages/blogs`,
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
        icon: "src/images/tde_icon.jpg", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
