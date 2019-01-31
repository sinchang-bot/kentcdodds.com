import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Header from './header'
import './layout.css'

type Props = {
  children: React.ReactNode | React.ReactNode[]
  title?: string
}

const Layout = ({children, title}: Props) => (
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
      title = title || data.site.siteMetadata.title
      return (
        <>
          <Header title={title} />
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
