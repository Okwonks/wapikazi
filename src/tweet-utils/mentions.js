var fs = require('fs');

const tweetEvent = (tweetObj) => {
    var json = JSON.stringify(tweetObj, null, 2);
    fs.writeFile('tweets.json', json);

    var retweetTo = tweetObj.in_reply_to_screen_name;
    var text = tweetObj.text;
    var from = tweetObj.user.screen_name;

    console.log(`To: ${retweetTo} from ${from}`);
    console.log(`Tweet: ${text}`);

    if (retweetTo == 'WapiKazi') {
        
    }
}