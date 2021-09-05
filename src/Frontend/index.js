import createGame from "../game"
import createScreen from "./screen"
import createKeyboardListener from "./keyboard"

const game = createGame()
const screen = createScreen(game)
const keyboard = createKeyboardListener()

keyboard.subscribe(game.movePlayer)

