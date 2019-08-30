const commands = require('./functions/commands');

module.exports = msg => {
  if(msg.content.startsWith('$share')) {
    commands.share(msg, msg.content.substr(7))
    .then(replymsg => {
      msg.reply(replymsg)
      .then(newMsg => {
        newMsg.react('🤘');
        newMsg.react('👎');
      })
    })
    .catch(error => {
      console.log(error);
      msg.reply('Search error');
    })
  }
}