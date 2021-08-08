// 添加新词条

var url = require('url');
var util = require('./util');

module.exports = function (req, res) {
	urlParser = url.parse(req.url, true);
	var mySessionKey = urlParser.query.mySessionKey;
	var item = urlParser.query.item;

	console.log('AddItem...');

	var state = checkUserLoginState(mySessionKey);
	if(state = "S") {
		if(util.addItemToDatabase(state.openid, item))
			res.end('S'); //success
		else
			res.end('F'); //fail
	}
	else if(state = "LT") { // login timeout
		res.end("LT");
	}
	else {
		res.end("UE"); // user error
	}

	console.log('AddItem complete');
}