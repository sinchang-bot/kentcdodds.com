import {PropTypes} from 'react'
import enhanceCollection from 'phenomic/lib/enhance-collection'

import Page from '../Page'
import PagesList from '../../PagesList'

const numberOfLatestPosts = 6

export default Homepage

function Homepage(props, {collection}) {
  const latestPosts = enhanceCollection(collection, {
    filter: {layout: 'Post'},
    sort: 'date',
    reverse: true,
  }).slice(0, numberOfLatestPosts)

  return (
    <Page {...props}>
      <h2>{"Latest Posts"}</h2>
      <PagesList pages={latestPosts} />
    </Page>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}
