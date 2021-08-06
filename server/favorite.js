// 返回用户收藏词条

var url = require('url');
var util = require('./util');

module.exports = function (req, res) {
	urlParser = url.parse(req.url, true);
	var mySessionKey = urlParser.query.mySessionKey;

	console.log("Favorite...");

	var userFavorite = util.getUserFavoriteByUsername(mySessionKey);
	res.end(JSON.stringify(userFavorite));

	console.log("Favorite complete");
}