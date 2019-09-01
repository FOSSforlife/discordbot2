const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const onMessage = require('./functions/onMessage');
const onVoiceStateUpdate = require('./functions/onVoiceStateUpdate');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', onMessage);
client.on('voiceStateUpdate', onVoiceStateUpdate);

client.login(process.env.DISCORD_TOKEN);