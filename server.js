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
  const io = require('socket.io')(server)

  let connections = {black: null, red: null}

  io.on('connection', (socket) => {
    console.log('new connection on', socket.id)
    if (!connections.red) {
      connections.red = socket.id
      socket.emit('player assignment', 'red')
    } else if (!connections.black) {
      connections.black = socket.id
      socket.emit('player assignment', 'black')
    }
    console.log(connections)

    socket.on('move', x => {
      socket.broadcast.emit('move', x)
    })

    socket.on('chat', message => {
      io.emit('chat', message)
    })

    socket.on('disconnect', () => {
      console.log('user left', socket.id)
      if (connections.red === socket.id) connections.red = null
      else if (connections.black === socket.id) connections.black = null
    })
  })

  app
    .use(morgan('tiny'))

    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))

    .use(express.static('desktop/public'))

    .use('/api', require('./api'))

    .get('/word', (req, res) => {
      res.send(rng(dictionary))
    })

    .get('/decksift', (req, res) => {
      // const fs = require('fs')
      // let bob = fs.readFileSync('./desktop/public/sampledeck.txt', {encoding: 'utf8'})
      // console.log(bob.split('\n'))
      // res.send(bob)
      res.sendFile(path.resolve(__dirname, './desktop/public/decksift.html'))
    })

    .get('/balls', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/deathball.html'))
    })

    .get('/ballsamic', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/aniball.html'))
    })

    .get('/gsap', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/gsap-demo.html'))
    })

    .get('/hatred', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/antiresponsive.html'))
    })

    .get('/test', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/test.html'))
    })

    .get('/rsvp', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/rsvp/index.html'))
    })

    .get('/countdown', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/countdown.html'))
    })

    .get('/mask', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/mask.html'))
    })

    .get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, './desktop/public/index.html'))
    })
})
.catch(err => console.error(err))