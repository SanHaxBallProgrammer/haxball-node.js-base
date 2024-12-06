import HaxballJS from "haxball.js";
import roomLink from "./controllers/roomLink.js";
import playerJoin from "./controllers/playerJoin.js";

HaxballJS
    .then((HBInit) => {
        const room = HBInit({
            roomName: "Nombre Sala",
            password: "12345",
            maxPlayers: 20,
            public: true,
            token: "thr1.AAAAAGdSYjWGfb7qOuxpcQ.4057gBpF3mY",
            noPlayer: true
        })

        room.onPlayerJoin = (player) => playerJoin(room, player)

        room.onRoomLink = roomLink
    })
    .catch(() => {
        console.log("Ha ocurrido un error")
    })