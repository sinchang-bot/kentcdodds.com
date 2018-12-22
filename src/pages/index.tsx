import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={['kentcdodds']} />
      <Link to="/blog">Blog</Link>
    </Layout>
  )
}

export default IndexPage
