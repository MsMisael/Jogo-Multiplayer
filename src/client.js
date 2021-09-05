import createGame from "./game"
import createScreen from "./Frontend/screen"
import createKeyboardListener from "./Frontend/keyboard"
import { io } from 'socket.io-client'


var game = createGame()

const screen = createScreen(game)

const keyboard = createKeyboardListener(document)
global.game = game
const socket = io()

socket.on('connect', ()=>{
    console.log(`Conectou no server com o id ${socket.id}`)
})
socket.on('setup', (state)=>{
    game.state = state 
})

keyboard.subscribe(game.movePlayer)

