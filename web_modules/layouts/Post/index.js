import {PropTypes} from 'react'

import Page from '../Page'

export default Post

function Post(props) {
  const {head} = props
  const pageDate = head.date ? new Date(head.date) : null

  return (
    <Page
      {...props}
      header={
        <header>
        {
          pageDate &&
          <time key={pageDate.toISOString()}>
            {pageDate.toDateString()}
          </time>
        }
        </header>
      }
    />
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}
