const path = require('path')

const here = (...p) => path.join(__dirname, ...p)

module.exports = {
  siteMetadata: {
    title: 'Kent C. Dodds',
    description: 'The personal website of Kent C. Dodds',
    author: '@kentcdodds',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          { resolve: require.resolve('./plugins/remark-embedder') },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: here('posts'),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: here('src/images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Kent C. Dodds Blog',
        short_name: 'kentcdodds blog',
        start_url: '/',
        background_color: '#223891',
        theme_color: '#223891',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
  ],
}

/* eslint camelcase:0 */
