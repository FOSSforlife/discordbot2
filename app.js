const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
  if(msg.content === 'ping') {
    msg.reply('pong');
  }
});


// console.log(process.env.DISCORD_TOKEN);
client.login(process.env.DISCORD_TOKEN);