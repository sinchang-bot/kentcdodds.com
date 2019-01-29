import React from 'react'
import Layout from '$components/layout'
import SEO from '$components/seo'

export default function DefaultLayout({
  children,
  pageContext,
  ...rest
}: {
  children: React.ReactNode | React.ReactNode[]
  pageContext: PageContext
}) {
  console.log(pageContext)
  return (
    <div>
      <SEO
        description
        meta
        keyword={pageContext.frontmatter.keywords}
        title={pageContext.frontmatter.title}
      />
      <Layout pageContext={pageContext} {...rest}>
        {children}
      </Layout>
    </div>
  )
}
