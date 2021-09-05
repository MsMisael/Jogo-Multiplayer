import createScreen from './Frontend/screen'




const game = {
    players: {
        'player1': { x: 1, y: 1 },
        'player2': { x: 9, y: 9 },
    },
    fruits: {
        'fruit1': { x: 3, y: 1 },

    }
}
global.game = game

const screen = createScreen(game)

document.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
    const keyPressed = event.key
    const player = game.players['player1']
    if (keyPressed == 'ArrowUp' && player.y - 1 >= 0) {
        player.y = player.y - 1
    }
    if (keyPressed == 'ArrowRight' && player.x + 1 < screen.width) {
        player.x = player.x + 1

    }
    if (keyPressed == 'ArrowDown' && player.y + 1 < screen.height) {
        player.y = player.y + 1

    }
    if (keyPressed == 'ArrowLeft' && player.x - 1 >= 0) {
        player.x = player.x - 1

    }

}