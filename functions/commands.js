const ytsearch = require('youtube-search');
const { google } = require('googleapis');

module.exports = {
  share: async (query) => {
    const youtube = google.youtube({
      version: 'v3',
      auth: process.env.YOUTUBE_API_KEY
    });

    // console.log(query);
    const res = await youtube.search.list({
      part: 'id,snippet',
      q: query
    });
    console.dir(res.data.items[0]);
    return `https://youtube.com/watch?v=${res.data.items[0].id.videoId}`;

    /* let opts = {
      maxResults: 10,
      key: process.env.YOUTUBE_API_KEY
    };

    return ytsearch(query, opts)
    .then(result => {
      console.log(result);
      return 'Search success';
    }); */
    
    // msg.reply(`you searched for ${query}`);
    // add emoticons
  }
}