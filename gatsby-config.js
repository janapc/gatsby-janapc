/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Janapc`,
    siteUrl: `https://www.janapc.com`,
    description: `My personal portfolio`,
    author: "Janaina pedrina",
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Janapc`,
        short_name: `Janapc`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#B1295B`,
        display: `standalone`,
        icon: `src/assets/Icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#B1295B`,
        showSpinner: false,
      },
    },
    
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto Mono`,
              variants: [`300`, `400`, `700`],
            },
            {
              family: `Roboto`,
              variants: [`300`, `400`, `700`],
            },
            {
              family: `Anonymous Pro`,
              variants: [`400`, `700`],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/contents/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    },
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/assets` } },
    `gatsby-plugin-preact`,
    `gatsby-plugin-offline`,
  ],
};
