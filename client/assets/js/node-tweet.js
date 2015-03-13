
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 't2mSTZ4nNIvCkFIzFFErzB8kA',
  consumer_secret: 'ZJdsHlFEgyR8nFNXBc5puwKjnUJOmGQ164JTA0hy7MtuaCSsYG',
  access_token_key: '2419290660-qsjtEOerUeOSEsj3BIMT5HPn9ciMkDv4dafFlFG',
  access_token_secret: 'CZ2OKRjltd5CfnxONzOkjMGXl4Qky5FQ7ERAlNFZu4P8g'
});
var screenName = process.argv.slice(2);
console.log(screenName);
var params = {screen_name:screenName.toString()};
// params.screen_name = process.argv.slice(2);
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
  	console.log(params);
  	console.log(tweets[0].text);
  	var i = 0;
  	while(i<tweets.length){
  	console.log(tweets[i].user.name);
  	console.log(tweets[i].text);
  	i++;
  	};
  }
});