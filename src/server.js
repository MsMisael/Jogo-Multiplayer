import express from 'express'
import http from 'http'
import createGame from './game.js'
import * as socketio from 'socket.io'

const  app = express()

const server = http.createServer(app)

const sockets = new socketio.Server(server)

app.use(express.static('./src/Frontend/public'))

const game = createGame()

game.addFruit({ fruitId: '1', fruitX: Math.floor(Math.random() * 10), fruitY: 3 })
game.addFruit({ fruitId: '2', fruitX: 7, fruitY: 5 })
game.addFruit({ fruitId: '3', fruitX: 6, fruitY: 8 })

game.addPlayer({
    playerId: 'player1',
    playerX: Math.floor(Math.random() * 10),
    playerY: Math.floor(Math.random() * 10)
})

game.addPlayer({
    playerId: 'player2',
    playerX: Math.floor(Math.random() * 10),
    playerY: Math.floor(Math.random() * 10)
})


sockets.on('connect',(socket)=>{
    const playerId = socket.id
    console.log(`Novo player com o id ${playerId}`)

    socket.emit('setup',game.state)
})

server.listen(3000, () => {
    console.log("Server escutando na porta 3000")
})