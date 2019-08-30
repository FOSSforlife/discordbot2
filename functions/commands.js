module.exports = {
  share: (msg, query) => {
    apikey = process.env.YOUTUBE_API_KEY;
  
    msg.reply(`you searched for ${query}`);
    // add emoticons
  }
}