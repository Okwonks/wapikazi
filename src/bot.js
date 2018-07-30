const { createServer } = require('http');
const config = require('./config');
const params = require('./query-config'); // constants unrealted to twitter configs
var Twit = require('twit');
var Twitter = new Twit(config);
var tweet = require('./tweet-utils/tweet');

tweet();
setInterval(tweet, params.rtwInterval);

// const stream = Twitter.stream('user');

const server = createServer((req, res) => {
    res.writeHead(302, {
        Location: `https://twitter.com/${params.username}`
    });
    res.end()
});

server.listen(process.env.PORT || 3000);