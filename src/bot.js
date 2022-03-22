const { createServer } = require('http');
const params = require('./query-config'); // constants unrealted to twitter configs
const tweet = require('./tweet-utils/tweet');

tweet();
setInterval(tweet, params.rtwInterval);

const server = createServer((req, res) => {
  res.writeHead(302, {
    Location: `https://twitter.com/${params.username}`
  });
  res.end();
});

server.listen(process.env.PORT || 3000);
