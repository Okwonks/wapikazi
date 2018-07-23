require('dotenv').config();
module.exports = {
    queryString: process.env.QUERY_STRING,
    resultType: process.env.RESULT_TYPE,
    language: process.env.DEFAULT_LANG,
    rtwInterval: process.env.RETWEET_INT
}