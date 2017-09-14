var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
    io.emit('chat message', msg)
  })
  socket.on('chat message2', (msg) => {
    console.log('message: ' + msg)
    io.emit('chat message2', msg)
  })
  socket.on('chat message3', (msg) => {
    console.log('message: ' + msg)
    io.emit('chat message3', msg)
  })
  socket.on('chat message4', (msg) => {
    console.log('message: ' + msg)
    io.emit('chat message4', msg)
  })
  socket.on('chat message5', (msg) => {
    console.log('message: ' + msg)
    io.emit('chat message5', msg)
  })
  socket.on('chat message6', (msg) => {
    console.log('message: ' + msg)
    io.emit('chat message6', msg)
  })
  socket.on('chat message7', (msg) => {
    console.log('message: ' + msg)
    io.emit('chat message7', msg)
  })
  socket.on('disconnect', () => {
    console.log('user DCd')
  })
})

http.listen(3001, () => {
  console.log('listening on 3001')
})
