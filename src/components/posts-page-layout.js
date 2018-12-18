import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { withMDXScope } from 'gatsby-mdx/context'

function PostPageTemplate({ data: { mdx } }) {
  return <MDXRenderer>{mdx.code.body}</MDXRenderer>
}

export default withMDXScope(PostPageTemplate)

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`

/* eslint react/prop-types:0 */

// cannot be TypeScript because gatsby-mdx actually compiles this with babel
// by itself. Kinda hacky but it's cool.
