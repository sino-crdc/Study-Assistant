// 详细信息

var url = require('url');
var util = require('./util');

module.exports = function(req, res) {
	urlParser = url.parse(req.url, true);
	var mySessionKey = urlParser.query.mySessionKey;
	var itemid = urlParser.query.itemid;

	console.log("Detail...");

	var itemDetail = getItemDetailById(mySessionKey, itemid);
	res.end(JSON.stringify(itemDetail));

	console.log("Detail complete");
}