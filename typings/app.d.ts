import '@emotion/core'

// declare module 'gatsby-mdx/*'
declare module 'gatsby-mdx/mdx-renderer'
declare module 'gatsby-mdx/context'

declare global {
  type GatsbyMDXNode = {
    id: string
    code: {
      body: string
    }
    frontmatter: {
      title: string
      slug: string
      tagline: string
    }
    excerpt: string
    parent: {
      name: string
    }
  }

  type AllGatsbyMDX = {
    edges: { node: GatsbyMDXNode }[]
  }
}

declare module 'gatsby-mdx/mdx-renderer'
declare module 'gatsby-mdx/context'
