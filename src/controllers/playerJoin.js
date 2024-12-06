const playerJoin = (room, player) => {
    const players = room.getPlayerList()

    if (players.length === 1) {
        room.setPlayerAdmin(player.id, true)
        return
    }
}

export default playerJoin