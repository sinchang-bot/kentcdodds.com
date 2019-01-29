import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

import Header from './header'
import './layout.css'

type Props = {
  children: React.ReactNode | React.ReactNode[]
  pageContext?: PageContext
}

const Layout = ({children, pageContext}: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      console.log({pageContext, data})
      const title = pageContext
        ? pageContext.frontmatter.title
        : data.site.siteMetadata.title
      return (
        <>
          <Header siteTitle={title} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </>
      )
    }}
  />
)

export default Layout
