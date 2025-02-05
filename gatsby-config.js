const project = `Acid Gatsby`
const version = `0.10`

module.exports = {
  siteMetadata: {
    site: `${project}`,
    description: `gatsbyjs bootstrap`,
    author: `@acidbjazz`,
    url: `https://acid-gatsby.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${project} ${version}`, // landing
        short_name: `${project}`, // icon
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zm4e8jz0ps44`,
        accessToken: `i7bRYkp5Xh-i4AVcPveWVjU1DlIWcSuxz1mJrF1IqX0`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-LFZK02B2K1"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
