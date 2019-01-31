const path = require('path')

const here = (...p) => path.join(__dirname, ...p)

module.exports = {
  siteMetadata: {
    title: `Kent C. Dodds · Making people's lives better with software.`,
    description: `
      Kent C. Dodds is a JavaScript software engineer and teacher. He's taught
      hundreds of thousands of people how to make the world a better place with
      quality software development practices. He lives with his wife and four
      kids in Utah.
    `,
    canonicalUrl: 'https://kentcdodds.com',
    // TODO: make sure this image exists...
    image: 'https://kentcdodds.com/images/kentcdodds.jpg',
    author: {
      name: 'Kent C. Dodds',
      minibio: `
        <strong>Kent C. Dodds</strong> is a JavaScript software engineer and
        teacher. He's taught hundreds of thousands of people how to make the
        world a better place with quality software development practices. He
        lives with his wife and four kids in Utah.
      `,
    },
    organization: {
      name: 'Kent C. Dodds',
      url: 'https://kentcdodds.com',
      // TODO: make sure this image exists...
      logo: 'https://kentcdodds.com/android-chrome-512x512.png',
    },
    social: {
      twitter: '@kentcdodds',
      fbAppID: '',
    },
  },
  plugins: [
    {resolve: `gatsby-plugin-emotion`},
    'gatsby-plugin-typescript',
    {resolve: `gatsby-plugin-svgr`},
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: here('./src/templates/default-layout.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {resolve: require.resolve('./plugins/remark-embedder')},
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
        name: 'Kent C. Dodds',
        short_name: 'kentcdodds',
        start_url: '/',
        background_color: '#223891',
        theme_color: '#223891',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
  ],
}

/* eslint babel/camelcase:0 */
