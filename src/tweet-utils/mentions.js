var fs = require('fs');

const tweetEvent = (tweetObj) => {
    var json = JSON.stringify(tweetObj, null, 2);
    fs.writeFile('tweets.json', json);

    var retweetTo;
    var text;
    var from;
    console.log(tweetObj.text)
    if (tweetObj) {
        retweetTo = tweetObj.in_reply_to_screen_name;
        text = tweetObj.text;
        from = tweetObj.user.screen_name;
    }

    console.log(`To: ${retweetTo} from ${from}`);
    console.log(`Tweet: ${text}`);

    if (retweetTo == 'wapikazi') {
        return true;
    }
}

module.exports = tweetEvent;