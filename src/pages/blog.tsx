import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage({ data }: { data: { allMdx: AllGatsbyMDX } }) {
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <ul>
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>{' '}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
