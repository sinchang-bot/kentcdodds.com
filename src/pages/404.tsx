import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function NotFoundPage() {
  const [pathname, setPathname] = React.useState('')
  React.useEffect(() => {
    setPathname(window.location.pathname)
  }, [])
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: 50, marginBottom: 20}}>Page not found</h1>
        <p>
          {`
            This page doesn't exist. It is quite possible that you were linked here
            from one of my GitHub projects. Those are now only available via the
          `}
          <a href="https://kentcdodds.github.io">kentcdodds.github.io</a> url.
        </p>
        <p>
          {`If this is the case, then you'll find the page you're looking for here:`}
          <a
            href={`https://kentcdodds.github.io${pathname}`}
            id="replace-location-pathname"
          >
            {`https://kentcdodds.github.io${pathname}`}
          </a>
        </p>
        <p>
          Otherwise, <a href="/">go to my homepage</a>.
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
