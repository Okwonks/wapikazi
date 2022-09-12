module.exports = tweetObj => {
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

