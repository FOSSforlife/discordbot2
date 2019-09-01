module.exports = (oldMember, newMember) => {
  if(newMember.voiceChannelID == '614921078527098910') {
    // let channels = newMember.guild.channels;
    // console.log('');
    // console.dir(Object.keys());
    let channel = newMember.guild.channels.get('616749911374954526');
    channel.send('+join');
  }
};