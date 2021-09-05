

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
        const { keyPressed } = command
        const player = state.players[command.playerId]
        
        const acceptedMoves = {
            ArrowUp(player) {
                if (player.y - 1 >= 0) {
                    player.y = player.y - 1
                }
            },
            ArrowRight(player) {
                if (player.x + 1 < screen.width) {
                    player.x = player.x + 1
                }
            },
            ArrowDown(player) {
                if (player.y + 1 < screen.height) {
                    player.y = player.y + 1
                }
            },
            ArrowLeft(player) {
                if (player.x - 1 >= 0) {
                    player.x = player.x - 1
                }
            }
        }

        const moveFunction = acceptedMoves[keyPressed]
        if (moveFunction) {
            moveFunction(player)
        }
    }

    return { movePlayer, state, screen }
}


export default createGame