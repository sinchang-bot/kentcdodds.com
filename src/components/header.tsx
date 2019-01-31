import React from 'react'
import {Link} from 'gatsby'

const Header = ({title = ''}: {title?: string}) => (
  <div>
    <div
      css={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 css={{margin: 0}}>
        <Link
          to="/"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {title}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
