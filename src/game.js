

function createGame() {
    const screen = {
        width: 10, height: 10
    }

    const state = {
        players: {
            'player1': { x: 1, y: 1 },
            'player2': { x: 9, y: 9 },
        },
        fruits: {
            'fruit1': { x: 3, y: 1 },

        }
    }

    function movePlayer(command) {
        const { playerId, keyPressed } = command
        const player = state.players[playerId]

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

    return { movePlayer, state, screen }
}


export default createGame