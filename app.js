const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const onMessage = require('./message');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', onMessage);

client.login(process.env.DISCORD_TOKEN);