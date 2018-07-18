const Twit = require('twit');
const config = require('../config');

const param = require('../query-config');
const bot = new Twit(config);

const queryString = unique()

function retweet() {
    const query = queryString();
}

module.exports = retweet;