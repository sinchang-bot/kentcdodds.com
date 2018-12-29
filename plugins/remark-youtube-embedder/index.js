const visit = require(`unist-util-visit`)
const getYouTubeHTML = require('./get-youtube-html')

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'text', node => {
    const { value } = node
    const html = getYouTubeHTML(value)
    if (html) {
      node.type = `html`
      node.value = html
    }
  })

  return markdownAST
}
