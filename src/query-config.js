require('dotenv').config();
module.exports = {
  queryString: process.env.QUERY_STRING,
  resultType: process.env.RESULT_TYPE,
  language: process.env.DEFAULT_LANG,
  rtwInterval: parseInt(process.env.RETWEET_INT) * 1000 * 60,
  username: process.env.USERNAME
};