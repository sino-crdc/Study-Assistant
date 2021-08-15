// 用户登录

var util = require('./util');
var url = require('url');
var request = require('request');
var config = require('./config');

module.exports = function (req, res) {
	urlParser = url.parse(req.url, true);
	var code = urlParser.query.code;

	console.log("Login...");
	
	// 向微信第三方服务器发送申请，请求session_key和openid
	request({
		url: config.wechatUrl,
		method: "GET",
		json: true,
		qs: {
			grant_type: 'authorization_code',
      		appid: config.appid,
      		secret: config.secret,
      		js_code: code
		}
	}, function (err, rres, body){
		if(!err && rres.statusCode == 200 && body.session_key) {
			var mySessionKey = util.makeMySessionKey(body.session_key);
			util.addUserToDatabase(mySessionKey, body.session_key, body.openid);
			var resData = {
				mySessionKey: mySessionKey
			};
			res.end(JSON.stringify(resData));
		}
		else {
			res.end('LF'); //login failed
		}

		console.log("Login complete");
	});
};
