const fs = require('fs');

module.exports = tweetObj => {
  // FIXME why is this here?
  const json = JSON.stringify(tweetObj, null, 2);
  fs.writeFile('tweets.json', json);

  let retweetTo, text, from;
  if (tweetObj) {
    retweetTo = tweetObj.in_reply_to_screen_name;
    text = tweetObj.text;
    from = tweetObj.user.screen_name;
  }

  console.log(`To: ${retweetTo} from ${from}`);
  console.log(`Tweet: ${text}`);

  return retweetTo === 'wapikazi';
};

