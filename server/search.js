// 返回用户搜索内容

var url = require('url');
var util = require('./util');

module.exports = function (req, res) {
	urlParser = url.parse(req.url, true);
	var keywords = urlParser.query.keywords;
	var username = urlParser.query.username;

	console.log("Search...");

	var resultList = util.searchByKeywords(keywords, username);
	res.end(JSON.stringify(resultList));

	console.log("Search complete");
}