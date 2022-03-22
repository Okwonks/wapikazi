const Twit = require('twit');
const config = require('../config');

const bot = new Twit(config);

function retweet(retweetId) {
  bot.post('statuses/retweet/:id', {
    id: retweetId
  }, (err, res) => { // eslint-disable-line no-unused-vars
    if (err) {
      console.log(`cannot retweet ${retweetId}`);
    }
  });
}

module.exports = retweet;
