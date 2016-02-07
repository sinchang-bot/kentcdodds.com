import ReactDOMServer from 'react-dom/server'

function Foo() {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  )
}

const string = ReactDOMServer.renderToStaticMarkup(
  <Foo />
)

console.log(string) // eslint-disable-line no-console

