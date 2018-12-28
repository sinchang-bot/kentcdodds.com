const visit = require(`unist-util-visit`)

module.exports = ({ markdownAST }, options = { width: 600, height: 300 }) => {
  function isUrlValid(userInput) {
    var res = userInput.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    )
    if (res == null) return false
    else return true
  }
  visit(markdownAST, `inlineCode`, node => {
    const { value } = node

    if (value.startsWith(`youtube:`)) {
      const videoUrl = value.substr(8)

      if (isUrlValid(videoUrl)) {
        node.type = `html`
        node.value = `<div><iframe src="${videoUrl}" width="${
          options.width
        }" height="${options.height}"></iframe></div>`
      }
    }
  })

  return markdownAST
}

module.exports = async ({ markdownAST }) => {
  visit(markdownAST, 'text', async node => {
    const { value } = node
    // https://youtu.be/v4c0IBeXwY8
    const youtubeLink = value.match(
      /https?:\/\/youtu\.?be(\.com)?\/.*?watch=(.*)?&?$/,
    )
    if (tweetLink) {
      console.log(`\n embeding tweet: ${tweetLink} \n`)
      const embedData = await getBloquequote(tweetLink)
      node.type = 'html'
      node.value = embedData.html
    }
  })

  return markdownAST
}
