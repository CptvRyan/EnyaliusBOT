"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./config.json');
var statustring = "No signal";
var request = require('request');
var mcCommand = '/minecraft';
var mcIP = settings.ip;
var mcPort = settings.port;
var url = 'http://mcapi.us/server/status?ip=185.199.108.153' + mcIP + '&port=25579' + mcPort;
function update() {
    request(url, function (err, response, body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (err) {
                console.log(err);
            }
            body = JSON.parse(body);
            var status = 'Server offline';
            console.log(body.motd);
            if (body.online) {
                if ((body.motd == "&cWe are under maintenance.") || (body.players.now >= body.players.max)) {
                    client.user.setStatus('idle')
                        .catch(console.error);
                }
                else {
                    client.user.setStatus('online')
                        .catch(console.error);
                }
                if (body.players.now) {
                    status = ' ' + body.players.now + '  of  ' + body.players.max;
                }
                else {
                    status = ' 0  of  ' + body.players.max;
                }
            }
            else {
                client.user.setStatus('dnd')
                    .catch(console.error);
            }
            client.user.setActivity(status, { type: 'PLAYING' })
                .then(presence => console.log(status))
                .catch(console.error);
        });
    });
}
client.on("ready", () => {
    console.log("I am ready!");
    client.setInterval(update, 30000);
});
client.login(settings.token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWNib3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWNib3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNwQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDMUMsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBRTlCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUM7QUFDN0IsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUN2QixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBRTNCLElBQUksR0FBRyxHQUFHLGtEQUFrRCxHQUFHLElBQUksR0FBRyxhQUFhLEdBQUcsTUFBTSxDQUFDO0FBRzdGLFNBQVMsTUFBTTtJQU1iLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBZSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUk7O1lBQzNDLElBQUcsR0FBRyxFQUFFO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFcEI7WUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1osSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsNkJBQTZCLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUM7b0JBQ2xGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzt5QkFFNUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkI7cUJBQUk7b0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO3lCQUU5QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN2QjtnQkFDQyxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO29CQUNqQixNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDL0Q7cUJBQU07b0JBQ0wsTUFBTSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDOUM7YUFDRjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7cUJBRTNCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFFdkI7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7aUJBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3JDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVMLENBQUM7QUFDRCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQixNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQztBQVdILE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=