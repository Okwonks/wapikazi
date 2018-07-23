// Declaring variables to use config
// and twit dependency from npm
const config = require('./config');
const qConfigs = require('./query-config'); // constants unrealted to twitter configs
var Twit = require('twit');
var Twitter = new Twit(config);
var retweet = require('./tweet-utils/retweet');

retweet();
setInterval(retweet, qConfigs.rtwInterval);

const stream = Twitter.stream('user');

Twitter.get('search/tweets', {q: '#NowPlaying, #Chronology', result_type:'recent'}, (err, data) => {
    if (!err) {
        var retweet_id = data.statuses[0].id_str;
        // Twitter.post('statuses/retweet/:id', {
        //     id: retweet_id
        // }, (err, res) => {
        //     if (res) {
        //         console.log(`retweeted ${retweet_id}`);
        //     }
        //     // Log whatever error could be caused.
        //     if (err) {
        //         console.log(`Error:[${err.name}] - ${err.message}`);
        //     }
        // });
    } else {
        console.log(`Unable to search tweet with error: ${err.message}\n Error type ${err.name}`);
    }
});
// Twitter.post('statuses/update', { status: "I'm posting a tweet! @Canned_Ear" }, (err, data, response) => {
//     console.log(data);
    
//     if(err) {
//       console.log("There was a problem tweeting the message.", err);
//     }
//   });