//my first step toward the building of a Node.js trading bot,
//using the api of the cryptocurrency trading website Poloniex.
//see https://temp.poloniex.com




var autobahn = require('autobahn');
var wsuri = "wss://api.poloniex.com";
var connection = new autobahn.Connection({
  url: wsuri,
  realm: "realm1"
});

connection.onopen = function (session) {
	function marketEvent (args,kwargs) {
		console.log(args);
	}
	function tickerEvent (args,kwargs) {
		console.log(args);
	}
	function trollboxEvent (args,kwargs) {
		console.log(args);
	}
	//session.subscribe('BTC_XMR', marketEvent);
	//session.subscribe('ticker', tickerEvent);
	session.subscribe('trollbox', trollboxEvent);// this line is used to get the messages from the trollbox users.
}

connection.onclose = function () {
  console.log("Websocket connection closed");
}
		       
connection.open();