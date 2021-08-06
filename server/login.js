// 用户登录

var util = require('./util');
var url = require('url');

module.exports = function (req, res) {
	urlParser = url.parse(req.url, true);
	var username = urlParser.query.username;
	var password = urlParser.query.password;

	console.log("Login...");

	if(util.isUsernameExisted(username)) { //检测username是否存在
		if(util.getPasswordByUsername(username) === password) //检测密码是否正确
			res.end("LS"); //login success
		else
			res.end("WP"); //wrong password
	}
	else
		res.end("WU"); // wrong username

	console.log("Login complete");
};