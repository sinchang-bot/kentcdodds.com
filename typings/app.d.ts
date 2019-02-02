/* eslint-disable */

import '@emotion/core'

// declare module 'gatsby-mdx/*'
declare module 'gatsby-mdx/mdx-renderer'
declare module 'gatsby-mdx/context'

declare global {
  type Frontmatter = {
    title: string
    slug: string
    description: string
    keywords?: string[]
    lang: string
    datePublished: string
  }
  type GatsbyMDXNode = {
    id: string
    code: {
      body: string
    }
    frontmatter: Frontmatter
    excerpt: string
    parent: {
      name: string
    }
  }

  type AllGatsbyMDX = {
    edges: {node: GatsbyMDXNode}[]
  }

  type PageContext = {frontmatter: Frontmatter}
}

declare module 'gatsby-mdx/mdx-renderer'
declare module 'gatsby-mdx/context'

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>

  const src: string
  export default src
}
