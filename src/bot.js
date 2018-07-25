const config = require('./config');
const qConfigs = require('./query-config'); // constants unrealted to twitter configs
var Twit = require('twit');
var Twitter = new Twit(config);
var tweet = require('./tweet-utils/tweet');

tweet();
setInterval(retweet, qConfigs.rtwInterval);

// const stream = Twitter.stream('user');