import canvas from './core'



const context = canvas.getContext('2d')


function createScreen(game) {

    canvas.width = game.screen.width && 10
    canvas.height = game.screen.height && 10
    requestAnimationFrame(renderScreen)

    function renderScreen() {
        context.clearRect(0, 0, 10, 10)
        for (const playerId in game.state.players) {
            const player = game.state.players[playerId]
            context.fillStyle = 'black'
            context.fillRect(player.x, player.y, 1, 1)
        }

        for (const fruitId in game.state.fruits) {
            const fruit = game.state.fruits[fruitId]
            context.fillStyle = 'red'
            context.fillRect(fruit.x, fruit.y, 1, 1)
        }

        requestAnimationFrame(renderScreen)
    }
    return canvas
}

export default createScreen