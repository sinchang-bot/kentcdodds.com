import React from 'react'
import {graphql, Link} from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import {withMDXScope} from 'gatsby-mdx/context'
import Layout from '$components/layout'

type Props = {
  data: {
    mdx: GatsbyMDXNode
  }
}

function PostPageTemplate({data: {mdx}}: Props) {
  return (
    <Layout>
      <div
        data-testid="post"
        css={{
          maxWidth: 600,
          marginTop: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div css={{marginBottom: 10, fontWeight: 100, textAlign: 'right'}}>
          <Link to="/blog">kentcdodds.com/blog</Link>
        </div>
        <article>
          <h1>{mdx.frontmatter.title}</h1>
          {mdx.frontmatter.description ? (
            <div>
              <em>{mdx.frontmatter.description}</em>
            </div>
          ) : null}
          <div css={{textAlign: 'right', marginBottom: 8, fontSize: '0.9em'}}>
            <em>
              By <Link to="/">Kent C. Dodds</Link>
            </em>
          </div>
          <hr />
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  )
}

export default withMDXScope(PostPageTemplate)

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        description
      }
      code {
        body
      }
    }
  }
`
