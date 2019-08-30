const ytsearch = require('youtube-search');

module.exports = {
  share: async (query) => {
    let opts = {
      maxResults: 10,
      key: process.env.YOUTUBE_API_KEY
    };

    return ytsearch(query, opts)
    .then(result => {
      console.log(result);
      return 'Search success';
    });
    
    // msg.reply(`you searched for ${query}`);
    // add emoticons
  }
}