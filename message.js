const commands = require('./functions/commands');

module.exports = msg => {
  if(msg.content.startsWith('$share')) {
    commands.share(msg, msg.content.substr(7));
  }
}