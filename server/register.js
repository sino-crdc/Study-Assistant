//  新用户注册

var url = require('url');
var util = require('./util');

module.exports = function (req, res) {
	urlParser = url.parse(req.url, true);
	var username = urlParser.query.username;
	var password = urlParser.query.password;

	console.log('Register...');

	if(!util.isUsernameExisted(username)) { // 检测该用户名是否存在
		util.addUserToDatabase(username, password);
		res.end('AS'); // add success
	}
	else 
		res.end('UE'); // user exists

	console.log('Register complete');
}