require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Merlyn Design Works`,
    description: `Liam Merlyn - Lead Shopify Developer with nearly 10 years experience in the Shopify space.`,
    author: `@ConduciveMammal`,
    siteUrl: `https://merlyndesignworks.co.uk/`,
    gqlUrl: `/__graphql`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-svgr',
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: true
    //   }
    // },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        sassOptions: {
          includePaths: ["src/styles/settings/variables.scss"],
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i1j93tml1xbh`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `merlyn-design-works`,
        short_name: `MDW`,
        start_url: `/`,
        background_color: `#242A35`,
        theme_color: `#242A35`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/app-icon.png`,
        icon_options: {
          purpose: `maskable`
        }
      }
    }
  ]
}
