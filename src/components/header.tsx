import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle = '' }: { siteTitle?: string }) => (
  <div
    css={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      css={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 css={{ margin: 0 }}>
        <Link
          to="/"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
