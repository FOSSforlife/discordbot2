const { google } = require('googleapis');

const ytPattern = /<@[0-9]*>, https:\/\/youtube.com\/watch/;

module.exports = {
  leaderboard: async (time, channels, msgLimit = 10) => {
    const musicCategory = '614915929515622459';
    const musicChannel = '614915777115586572';
    let allMessages = [];
    
    // for(let channel in channels.entries().array()) {
    //   // if(key === '614915777115586572' || value.parentID === '614915929515622459') {
    //   if(channel.key === '616749911374954526') {
    //     let messages = await channel.value.fetchMessages({limit: msgLimit});
    //     for(let message in messages.values().array()) {
    //       if(message.content.match(ytPattern) !== null) {
    //         if(message.reactions.get('🤘') && message.reactions.get('🤘').count > 1) {
    //           console.log(message.reactions.get('🤘').count);
    //           allMessages.push({
    //             title: message.embeds[0].title,
    //             // user: message.mentions.users.values().next().value,
    //             user: message.mentions.users.first(),
    //             count: message.reactions.get('🤘').count - 1
    //           });
    //         }
    //       }  
    //     }
    //   }
    // }

    // allMessages = allMessages.sort((a, b) => b.count - a.count);
    // let returnValue = '```\n';
    // returnValue += allMessages.map(({user, title, count}) => {
    //   return `**${user}**: ${title} (${count})`;
    // }).join('\n');
    // return returnValue + '\n```';
    return 'leaderboards not implemented yet';
  },
  share: async (query) => {
    const youtube = google.youtube({
      version: 'v3',
      auth: process.env.YOUTUBE_API_KEY
    });

    // console.log(query);
    return youtube.search.list({
      part: 'id,snippet',
      q: query
    })
    .then(res => `https://youtube.com/watch?v=${res.data.items[0].id.videoId}`);
  }
}