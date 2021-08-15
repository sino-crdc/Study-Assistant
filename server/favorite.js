// 返回用户收藏词条

var url = require('url');
var util = require('./util');

module.exports = function (req, res) {
	urlParser = url.parse(req.url, true);
	var mySessionKey = urlParser.query.mySessionKey;

	console.log("Favorite...");

	var state = checkUserLoginState(mySessionKey);
	if(state == "S") {
		var userFavorite = util.getUserFavoriteByOpenid(state.openid);
		res.end(JSON.stringify(userFavorite));
	}
	else if(state == "LT") {
		res.end("LT"); // login timeout
	}
	else {
		res.end("UE"); // user error
	}

	console.log("Favorite complete");
}
