const haxballJS = require('haxball.js')
const config = require('./config.js')

haxballJS.then((HBInit) => {
    const room = HBInit({
        roomName: config.roomName,
        maxPlayers: 16,
        public: true,
        noPlayer: true,
        token: config.token, 
      });
    

      room.onPlayerJoin = function(player) {
        room.sendAnnouncement(`Hoşgeldin ${player.name}`, null, 0x00FFFF,"bold")
        room.sendAnnouncement(`Komutlarımız! !discord, !nesunucusu`, null, 0x00FFFF,"bold")
        room.sendAnnouncement(`HSL'League https://discord.gg/hVmPPbqkNW || Akmanca`, null, 0x00FFFF,"italic")
      }
       room.onPlayerChat = function(player, message) {
        if (message == "!nesunucusu") {
            room.sendAnnouncement(`${config.leagueName}`, null, 0x00FFFF,"bold")
        } else if (message == "!discord" || message == "!dc") {
            room.sendAnnouncement(`İşte Discord Sunucumuz: ${config.discord}`, null, 0x00FFFF,"bold")
            room.sendAnnouncement(`HSL'League https://discord.gg/hVmPPbqkNW || Akmanca`, null, 0x00FFFF,"italic")
        }
       }


      room.onRoomLink = function (link) {
        console.log(link);
        console.log("Akmanca | HSL'League")
      };
})