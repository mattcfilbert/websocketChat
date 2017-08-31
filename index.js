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
  socket.on('disconnect', () => {
    console.log('user DCd')
  })
})

http.listen(3001, () => {
  console.log('listening on 3001')
})
