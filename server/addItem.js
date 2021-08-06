// 添加新词条

var url = require('url');
var util = require('./util');

module.exports = function (req, res) {
	urlParser = url.parse(req.url, true);
	var username = urlParser.query.username;
	var item = urlParser.query.item;

	console.log('AddItem...');

	if(util.addItemToDatabase(username, item))
		res.end('S'); //success
	else
		res.end('F'); //fail

	console.log('AddItem complete');
}