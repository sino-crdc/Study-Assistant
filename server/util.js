// 工具库

var crypto = require("crypto");

// 检查用户登陆状态
var checkUserLoginState = function (mySessionKey) {
	var state = getStateByMySessionKey(mySessionKey);
	if(state) {
		var date = new Date();
		var curtime = date.getTime();
		if(curtime - state.loginTime <= 86400000) {
			return "S"; // success
		}
		else {
			deleteUser(mySessionKey); // todo
			return "LT"; // login timeout
		}
	}
	else {
		return "UE"; // user error
	}
}

// 获取用户当前状态
// {
// 		openid:
// 		session_key:
// 		loginTime:
// }
var getStateByMySessionKey = function (mySessionKey) {
	return {
		openid: "123",
		session_key: session_key,
		loginTime: 0
	};
}

// 从用户登陆数据库中删除过期数据
var deleteUser = function (mySessionKey) {
	return；
}

// 增加用户到用户登陆数据库
var addUserToDatabase = function (mySessionKey, session_key, openid) {
	return;
}

// 从用户个人信息数据库中获取用户收藏（简略信息）
var getUserFavoriteByOpenid = function (openid) {
	var uf = [
		{
			"id": 1,
			"title": "Theoreme de Lagrenge",
			"content": "blablabla..."
		},
		{
			"id": 2,
			"title": "Theoreme du milieu",
			"content": "bla..."
		}
	];
	return uf;
}

// 利用关键词从数据库中获取搜索结果（简略信息）
var searchByKeywords = function (mySessionKey, keywords) {
	var resultList = {};
	return resultList;
}

// 将新词条加入数据库中
var addItemToDatabase = function (openid, item) {
	return true;
}

// 制作自定义session_key
var makeMySessionKey = function (session_key) {
	return crypto.createHash('sha1').update(session_key, 'utf8').digest('hex');
}

module.exports = {
	deleteUser: deleteUser,
	checkUserLoginState: checkUserLoginState,
	getStateByMySessionKey: getStateByMySessionKey,
	addUserToDatabase: addUserToDatabase,
	getUserFavoriteBymySessionKey: getUserFavoriteBymySessionKey,
	searchByKeywords: searchByKeywords,
	addItemToDatabase: addItemToDatabase,
	makeMySessionKey: makeMySessionKey
};