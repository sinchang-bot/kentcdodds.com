import {PropTypes} from 'react'
import Helmet from 'react-helmet'

import Header from '../Header'
import Footer from '../Footer'

import './index.global.css'
import styles from './index.css'

export default Layout

function Layout({children}, {metadata}) {
  const {pkg} = metadata

  return (
    <div className={styles.layout}>
      <Helmet
        meta={[
          {
            name: 'generator', content: `${
            process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
          },
          {property: 'og:site_name', content: pkg.name},
          {name: 'twitter:site', content: `@${ pkg.twitter }`},
        ]}
        script={[
          {src: 'https://cdn.polyfill.io/v2/polyfill.min.js'},
        ]}
      />

      { /* meta viewport safari/chrome/edge */ }
      <Helmet
        meta={[{
          name: 'viewport', content: 'width=device-width, initial-scale=1',
        }]}
      />
      <style>{"@-ms-viewport { width: device-width; }"}</style>

      <Header />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

Layout.contextTypes = {
  metadata: PropTypes.object.isRequired,
}
