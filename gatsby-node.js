const path = require('path')

// this allows prettier to know it's graphql and format it appropriately
const graphql = String.raw

exports.createPages = async ({graphql: gql, actions}) => {
  const {createPage} = actions
  const result = await gql(
    graphql`
      query {
        allMdx(
          filter: {frontmatter: {published: {ne: false}}}
          sort: {order: DESC, fields: [frontmatter___date]}
        ) {
          edges {
            node {
              id
              parent {
                ... on File {
                  name
                  sourceInstanceName
                }
              }
              excerpt(pruneLength: 250)
              frontmatter {
                title
                slug
                date
              }
              code {
                scope
              }
            }
          }
        }
      }
    `,
  )

  if (result.errors) {
    console.log(result.errors)
    throw result.errors
  }
  // Create blog posts pages.
  result.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {id: node.id},
    })
  })
}

// This is a shortcut so MDX can import components without gross relative paths.
// Example: import { Figure } from '$components';
exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {$components: path.resolve(__dirname, 'src/components')},
    },
  })
}

/* eslint no-console:0 */
