// Declaring variables to use config
// and twit dependency from npm
const config = require('./config');
var Twit = require('twit');
var Twitter = new Twit(config);

var retweet = function () {
    var parmams = {
        q: '#wapikazi',
        result_type: 'recent',
    }
}