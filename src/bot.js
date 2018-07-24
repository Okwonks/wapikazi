const config = require('./config');
const qConfigs = require('./query-config'); // constants unrealted to twitter configs
var Twit = require('twit');
var Twitter = new Twit(config);
var retweet = require('./tweet-utils/retweet');

retweet();
setInterval(retweet, qConfigs.rtwInterval);

// const stream = Twitter.stream('user');