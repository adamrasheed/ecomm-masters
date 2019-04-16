module.exports = {
  siteMetadata: {
    title: `Learn Shopify Development | eComm Masters`,
    description: `Learn how to develop custom Shopify themes with this free 5-part crash course video tutorial series.`,
    author: `@arasheedphoto`,
    image: `src/images/metaImage.png`,
    url: `https://ecommmasters.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-40235547-8",
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "4701754791",

        // Include GTM in development.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        gtmAuth: "u0hk8wlccVpyZqmarY5sEw",
        gtmPreview: "Live",
        dataLayerName: "GTM-WCK94FR",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ecomm-masters`,
        short_name: `ecomm-masters`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
