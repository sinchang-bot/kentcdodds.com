import React from 'react'
import SEO from '$components/seo'
import styled from '@emotion/styled'

// TODO: figure out why TypeScript can't resolve these modules...
// @ts-ignore
import {ReactComponent as Twitter} from '../images/svgs/twitter.svg'
// @ts-ignore
import {ReactComponent as GitHub} from '../images/svgs/github.svg'
// @ts-ignore
import {ReactComponent as YouTube} from '../images/svgs/youtube.svg'

const LinkBox = styled.div({
  height: 400,
  padding: 30,
  backgroundColor: '#E75248',
  color: 'white',
})

function IconLink({
  href,
  color,
  Icon,
}: {
  href: string
  color: string
  Icon: React.SFC<React.SVGProps<SVGSVGElement>>
}) {
  return (
    <a href={href} css={{color: 'black', ':hover,:focus': {color}}}>
      <Icon css={{fill: 'currentColor'}} />
    </a>
  )
}

function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <div
        css={{
          maxWidth: 720,
          margin: 'auto',
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            '& > *:not(:first-child)': {
              marginTop: 25,
            },
            '& > *:not(:last-child)': {
              marginBottom: 25,
            },
          }}
        >
          <div css={{display: 'flex', justifyContent: 'space-between'}}>
            <div
              css={{
                textTransform: 'uppercase',
                padding: 20,
                backgroundColor: '#17A974',
                color: 'white',
              }}
            >
              Home of Kent C. Dodds
            </div>
            <div>
              <ul
                css={{
                  listStyle: 'none',
                  paddingLeft: 0,
                  display: 'grid',
                  gridTemplateColumns: 'fit-content(200px) fit-content(200px)',
                  gridGap: 10,
                  justifyContent: 'end',
                }}
              >
                <li>About</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div>
            <div
              css={{
                display: 'grid',
                gridTemplateColumns: 'fit-content(1000px) fit-content(400px)',
                gridGap: 10,
              }}
            >
              <div>
                Building, teaching, and making the world a better place with
                quality software.
              </div>
              <div>
                <img
                  src={require('../images/photo-transparent.png')}
                  css={{maxWidth: '100%'}}
                />
              </div>
            </div>
          </div>
          <div>
            {`
              I'm a world renowned speaker, teacher, and trainer. I'm the
              creator of TestingJavaScript.com and an instructor on egghead.io
              and Frontend Masters. I'm also actively involved in the open
              source community as a maintainer and contributor to hundreds of
              popular npm packages you probably use every day. I'm happily
              married and the father of four kids. I'm also working on a fantasy
              novel! I like my family, code, JavaScript, and React.
            `}
          </div>
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))',
              gridGap: 20,
              justifyContent: 'center',
            }}
          >
            <LinkBox css={{backgroundColor: '#6E31DC'}}>Blog</LinkBox>
            <LinkBox css={{backgroundColor: '#E75248'}}>Workshops</LinkBox>
            <LinkBox css={{backgroundColor: '#327CDC'}}>Talks</LinkBox>
            <LinkBox css={{backgroundColor: '#FFB700'}}>
              3 Minutes with Kent
            </LinkBox>
          </div>
          <div css={{gridArea: 'cta'}}>
            <Subscribe />
          </div>
          <div
            css={{
              gridArea: 'footer',
              display: 'grid',
              gridGap: 20,
              gridTemplateColumns: '1fr 26px 26px 26px',
              marginBottom: 40,
            }}
          >
            <div>Kent C. Dodds © {new Date().getFullYear()}</div>
            <div>
              <IconLink
                href="https://github.com/kentcdodds"
                color="#181717"
                Icon={GitHub}
              />
            </div>
            <div>
              <IconLink
                href="https://twitter.com/kentcdodds"
                color="#1DA1F2"
                Icon={Twitter}
              />
            </div>
            <div>
              <IconLink
                href="https://www.youtube.com/c/kentcdodds-vids"
                color="#FF0000"
                Icon={YouTube}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Subscribe() {
  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log((e.target as HTMLFormElement).elements)
  }
  return (
    <>
      <div>Join my newsletter</div>
      <form
        onSubmit={handleSubmit}
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 150px',
          gridGap: 10,
        }}
      >
        <div css={{flex: 1, display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="first-name">Your first name</label>
          <input
            css={{
              boxSizing: 'border-box',
              height: '51px',
              width: '273px',
              border: '1px solid #E5E5E5',
              backgroundColor: '#FFFFFF',
              paddingLeft: 20,
              paddingRight: 20,
            }}
            id="first-name"
            placeholder="Jane"
          />
        </div>
        <div css={{flex: 1, display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="email">Your email</label>
          <input
            css={{
              boxSizing: 'border-box',
              height: '51px',
              width: '273px',
              border: '1px solid #E5E5E5',
              backgroundColor: '#FFFFFF',
              paddingLeft: 20,
              paddingRight: 20,
            }}
            id="email"
            placeholder="jane@example.com"
          />
        </div>
        <button
          type="submit"
          css={{
            alignSelf: 'flex-end',
            backgroundColor: '#17A974',
            height: 50,
            paddingLeft: 20,
            paddingRight: 20,
            width: '100%',
            color: 'white',
          }}
        >
          Subscribe
        </button>
      </form>
    </>
  )
}

export default IndexPage

/* eslint max-lines-per-function:0 */
