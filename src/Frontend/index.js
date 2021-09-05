import createGame from "../game"
import createScreen from "./screen"
import createKeyboardListener from "./keyboard"

const game = createGame()

game.addFruit({ fruitId: '1', fruitX: Math.floor(Math.random() * 10), fruitY: 3 })
game.addFruit({ fruitId: '2', fruitX: 7, fruitY: 5 })
game.addFruit({ fruitId: '3', fruitX: 6, fruitY: 8 })

game.addPlayer({
    playerId: 'player1',
    playerX: Math.floor(Math.random() * 10),
    playerY: Math.floor(Math.random() * 10)
})

const screen = createScreen(game)

const keyboard = createKeyboardListener(document)

keyboard.subscribe(game.movePlayer)

