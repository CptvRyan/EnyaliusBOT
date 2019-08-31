//credit to vegeta897 for the request URL part from his 'Simple Minecraft server status bot'
import Discord = require("discord.js");
const client = new Discord.Client();
let settings: any;
settings = require('./config.json');
let request: any;
request = require('request');
// Command for triggering
const mcIP = settings.ip; // Your MC server IP
const mcPort = settings.port; // Your MC server port

const url = 'http://mcapi.us/server/status?ip=185.199.108.153' + mcIP + '&port=25579' + mcPort;


function update() {
  /*seconds = seconds + 1;
  secondsString = seconds.toString();
  client.user.setActivity(secondsString, { type: 'Playing' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);*/
  // @ts-ignore
    request(url, async function (err, response, body) {
      if (err) {
          console.log(err);
          //return message.reply('Error getting Minecraft server status...');
      }
      body = JSON.parse(body);
        let status = 'Server offline';
        console.log(body.motd);
      if (body.online) {
          if ((body.motd == "&cWe are under maintenance.") || (body.players.now >= body.players.max)) {
              client.user.setStatus('idle')
              //.then(console.log)
                  .catch(console.error);
          } else {
              client.user.setStatus('online')
              //.then(console.log)
                  .catch(console.error);
          }
          if (body.players.now) {
              status = ' ' + body.players.now + '  of  ' + body.players.max;
          } else {
              status = ' 0  of  ' + body.players.max;
          }
      } else {
          client.user.setStatus('dnd')
          //.then(console.log)
              .catch(console.error);

      }
      client.user.setActivity(status, {type: 'PLAYING'})
          .then(() => console.log(status))
          .catch(console.error);
  });

}
client.on("ready", () => {
  console.log("I am ready!");
  client.setInterval(update,30000);
});

/*client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
    update();

  }
}
);*/

client.login(settings.token).then(() => {

});
