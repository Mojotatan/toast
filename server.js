const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const {readTheDictionary, rng} = require('./util')
let dictionary = readTheDictionary()

const db = require('./db').db

let port = process.env.PORT || '1337'
const app = express()
db.sync({force: true})
.then(() => {
  const server = app.listen(port, () => {console.log(`Listening on port ${port}...`)})

  app
    .use(morgan('tiny'))

    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))

    .use(express.static('desktop/public'))

    .use('/api', require('./api'))

    .get('/word', (req, res) => {
      res.send(rng(dictionary))
    })

    .get('/balls', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/deathball.html'))
    })

    .get('/ballsamic', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/aniball.html'))
    })

    .get('/hatred', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/antiresponsive.html'))
    })

    .get('/test', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/test.html'))
    })

    .get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/index.html'))
    })
})
.catch(err => console.error(err))