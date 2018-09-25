const Twit = require('twit');
const unique = require('unique-random-array');
const moment = require('moment');
const config = require('../config');
const mentions = require('./mentions');
const retweet = require('./retweet');

const param = require('../query-config');
const bot = new Twit(config);

const queryString = unique(param.queryString.split(','));

function tweet() {
    const query = `${queryString()} -RT`;

    bot.get('search/tweets', {
        q: query,
        lang:param.language,
        result_type: param.resultType
    }, (err, data) => {
        if (!err) {
            if (data.statuses.length > 0) {
                const randomPos = Math.floor(Math.random() * data.statuses.length);
                let tweet = data.statuses[randomPos];
                let retweet_id = tweet.id_str;
                let mentioned = mentions(tweet);
                let createdAt = Date.parse(tweet.created_at);
                let timestamp = moment(createdAt).format('hh:mm a');
                let retweetBody = `${timestamp} #ikokazi via @${tweet.user.screen_name} ${tweet.text}`;
                // Check to see if the bot is mentioned
                if (mentioned) {
                    console.log('starting tweet ...');
                    bot.post('statuses/update', {
                        id: retweet_id,
                        status: retweetBody
                    }, (err, res) => {
                        if (res) {
                            console.log(`tweeted ${retweet_id}`);
                        }
                        if (!err) {
                            console.log(`tweeted: ${tweet.text}\nBy: @${tweet.user.screen_name}`);
                        }
                    });
                } else {
                    // If the bot isn't mentioned retweet the tweet
                    console.log(`retweeting @${tweet.user.screen_name}'s tweet`);
                    retweet(retweet_id);
                }
            }
        } else {
            console.log(`${err.name}: ${err.message}`);
        }

    });
}

module.exports = tweet;