const fs = require('fs')
const path = require('path')

const readTheDictionary = () => {
  let words = []
  let stream = fs.createReadStream(path.resolve(__dirname, './dictionary.txt'), 'utf8')
    .on('data', chunk => {
      chunk.split('\n').forEach(word => {
        if (word.length > 4) words.push(word)
      })
    })
    .on('end', () => {
      // console.log(count)
    })
  return words
}

const rng = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = {
  readTheDictionary,
  rng
}