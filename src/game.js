

function createGame() {

    const state = {
        players: {},
        fruits: {},
        screen : {
            width: 10, height: 10
        }
    }

    function addPlayer(command) {
        const playerId = command.playerId
        const playerX = command.playerX
        const playerY = command.playerY

        state.players[playerId] = {
            x: playerX,
            y: playerY
        }

    }

    function removePlayer(command) {
        const playerId = command.playerId

        delete state.players[playerId]
    }
    function addFruit(command) {
        const fruitId = command.fruitId
        const fruitX = command.fruitX
        const fruitY = command.fruitY

        state.fruits[fruitId] = {
            x: fruitX,
            y: fruitY
        }

    }

    function removeFruit(fruitId) {
        delete state.fruits[fruitId]
    }

    function movePlayer(command) {

        const acceptedMoves = {
            ArrowUp(player) {
                if (player.y - 1 >= 0) {
                    player.y = player.y - 1
                }
            },
            ArrowRight(player) {
                if (player.x + 1 < state.screen.width) {
                    player.x = player.x + 1
                }
            },
            ArrowDown(player) {
                if (player.y + 1 < state.screen.height) {
                    player.y = player.y + 1
                }
            },
            ArrowLeft(player) {
                if (player.x - 1 >= 0) {
                    player.x = player.x - 1
                }
            }
        }

        const { keyPressed } = command
        const player = state.players[command.playerId]
        const moveFunction = acceptedMoves[keyPressed]
        const { playerId } = command

        if (player && moveFunction) {
            moveFunction(player)
            checkForColision(playerId)
        }
    }

    function checkForColision(playerId) {
        const player = state.players[playerId]

        for (const fruitId in state.fruits) {
            const fruit = state.fruits[fruitId]
            if (player.x === fruit.x && player.y === fruit.y) {
                removeFruit(fruitId)
                addFruit({ fruitId: fruitId, fruitX: Math.floor(Math.random() * 10), fruitY: Math.floor(Math.random() * 10) })

            }
        }

    }

    return {
        movePlayer,
        addPlayer,
        removePlayer,
        addFruit,
        removeFruit,
        state,
        screen
    }
}


export default createGame