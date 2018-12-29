#!/usr/bin/env node

const fetch = require('node-fetch')

let data = ''
process.stdin.setEncoding('utf8')

process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  if (chunk !== null) {
    data += chunk
  }
})

const script =
  '\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'

process.stdin.on('end', () => {
  fetch(`https://publish.twitter.com/oembed?url=${data}`)
    .then(r => r.json())
    .then(r => {
      const html = [r.html]
        .map(s => s.replace(script, ''))
        .map(s => s.replace(/\?ref_src=twsrc.*?fw/g, ''))
        .join('')
      process.stdout.write(html)
    })
})
