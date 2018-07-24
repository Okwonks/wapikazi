const Twit = require('twit');
const unique = require('unique-random-array');
const config = require('../config');
const mentions = require('./mentions');

const param = require('../query-config');
const bot = new Twit(config);

const queryString = unique(param.queryString.split(','));

function retweet() {
    const query = queryString();

    bot.get('search/tweets', {
        q: query,
        lang:param.language,
        result_type: param.resultType
    }, (err, data) => {
        if (!err) {
            console.log(data.statuses.length);
            
            if (data.statuses.length > 0) {
                let tweet = data.statuses[0];
                let retweet_id = tweet.id_str;
                let mentioned = mentions(tweet);
                let retweetBody = `#ikokazi via @${tweet.user.screen_name}`
                
                if (mentioned) {
                    bot.post('status/retweet/:id', {
                        id: retweet_id,
                        status: retweetBody
                    }, (err, res) => {
                        if (res) {
                            console.log(`retweeted ${retweet_id}`);
                        }
                        if (!err) {
                            console.log(`Retweeted: ${data.statuses[0].text}\nBy: @${data.statuses[0].user.screen_name}`);
                        }
                    });
                } else {
                    console.log('Nothing to retweet ...');
                }
            }
        } else {
            console.log(`${err.name}: ${err.message}`);
        }

    });
}

module.exports = retweet;