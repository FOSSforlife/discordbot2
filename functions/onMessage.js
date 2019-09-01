const commands = require('./commands');

module.exports = msg => {
  if(msg.content.startsWith('$share')) {
    commands.share(msg.content.substr(7))
    .then(replymsg => {
      msg.reply(replymsg)
      .then(newMsg => {
        newMsg.react('🤘');
      })
    })
    .catch(error => {
      console.log(error);
      msg.reply('Search error');
    })
  }
  else if(msg.content.startsWith('$leaderboards')) {
    commands.leaderboard('week', msg.guild.channels)
    .then(console.log);
  }
}