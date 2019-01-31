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
  return (
    <div>
      <SEO
        keywords={pageContext.frontmatter.keywords}
        title={pageContext.frontmatter.title}
      />
      <Layout title={pageContext.frontmatter.title} {...rest}>
        {children}
      </Layout>
    </div>
  )
}
