import React from 'react'
import SEO from '$components/seo'
import {ReactComponent as Twitter} from '../images/svgs/twitter.svg'
import {ReactComponent as GitHub} from '../images/svgs/github.svg'

export default IndexPage

function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <div
        css={{
          maxWidth: 1080,
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(200px, 1fr) minmax(200px, 600px)',
          gridTemplateAreas: `
            "....... navbar"
            "name    photo"
            "tagline photo"
            "....... photo"
            "content content"
            "cta     cta"
            "footer  footer"
          `,
          gridGap: '20px',
          backgroundColor: '#fff',
          color: '#444',
          '& > div': {
            border: '1px solid #eee',
          },
        }}
      >
        <div css={{gridArea: 'navbar'}}>
          <ul
            css={{
              listStyle: 'none',
              paddingLeft: 0,
              display: 'grid',
              gridTemplateColumns: 'fit-content(200px) fit-content(200px)',
              gridGap: 10,
              justifyContent: 'end',
              marginRight: 20,
            }}
          >
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>
        <div css={{gridArea: 'name'}}>
          <h1 css={{fontWeight: 'bold'}}>{`Hi, I'm Kent C. Dodds`}</h1>
        </div>
        <div css={{gridArea: 'tagline'}}>
          {`I help people make the world better through quality software.`}
        </div>
        <div css={{gridArea: 'photo'}}>
          <img
            src={require('../images/photo-transparent.png')}
            css={{maxWidth: '100%'}}
          />
        </div>
        <div css={{gridArea: 'content'}}>
          {`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis at sem vel facilisis. Integer nec justo dapibus, faucibus risus eu, ultrices massa. Phasellus enim mi, dictum ut maximus vitae, lacinia et velit. Pellentesque vestibulum dui purus. Pellentesque hendrerit iaculis finibus. Praesent faucibus facilisis dolor eu tempor. Sed maximus tortor sapien, sed commodo diam suscipit aliquam. Vivamus sed luctus orci.

            Cras molestie, urna non lobortis efficitur, ex ipsum dictum nibh, in vestibulum dolor nunc at ex. Sed feugiat velit est, sit amet luctus leo maximus non. Donec dapibus ex eget erat maximus venenatis. Integer posuere ultricies lacus sed fringilla. Mauris sed eleifend ipsum, et luctus magna. Vestibulum quis volutpat tellus, at dictum libero. Duis ac lectus id ligula consequat iaculis. Pellentesque finibus velit vitae ligula imperdiet feugiat. Phasellus eu sem vitae ante eleifend accumsan et a leo. Ut tristique orci venenatis varius imperdiet. Donec id ornare neque. Donec molestie mi sit amet metus vestibulum, nec pulvinar mauris varius. Nam tristique imperdiet felis et ornare. Sed ligula massa, tincidunt in nisl blandit, interdum efficitur ante. Vivamus et turpis dignissim, rutrum mi a, bibendum est. Fusce eu rutrum mauris.
          `}
        </div>
        <div css={{gridArea: 'cta'}}>
          <Subscribe />
        </div>
        <div
          css={{
            gridArea: 'footer',
            display: 'grid',
            gridTemplateColumns: '1fr 40px 40px',
          }}
        >
          <div>Kent C. Dodds © {new Date().getFullYear()}</div>
          <div>
            <a
              href="https://github.com/kentcdodds"
              css={{color: 'black', ':hover,:focus': {color: '#181717'}}}
            >
              <GitHub css={{maxWidth: 30, fill: 'currentColor'}} />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/kentcdodds"
              css={{color: 'black', ':hover,:focus': {color: '#1DA1F2'}}}
            >
              <Twitter css={{maxWidth: 30, fill: 'currentColor'}} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

function Subscribe() {
  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(e.target.elements)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name</label>
      <input id="first-name" />
      <label htmlFor="last-name">Last Name</label>
      <input id="last-name" />
      <button type="submit">Join</button>
    </form>
  )
}
