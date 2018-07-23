const Twit = require('twit');
const unique = require('unique-random-array');
const config = require('../config');

const param = require('../query-config');
const bot = new Twit(config);

const queryString = unique(param.queryString);

function retweet() {
    const query = queryString();

    bot.get('search/tweets', {
        q: query,
        result_type: param.resultType
    }, (err, data) => {
        if (!err) {
            let retweet_id = data.statuses[0].id_str;

            bot.post('status/retweet/:id', {
                id: retweet_id
            }, (err, res) => {
                if(res) {
                    console.log(`retweeted ${retweet_id}`);
                }
                if (!err) {
                    console.log(`Retweeted: ${data.statuses[0].text}\nBy: @${data.statuses[0].user.screen_name}`);
                }
            });
        } else {
            console.log(`${err.name}: ${err.message}`);
        }

    });
}

module.exports = retweet;