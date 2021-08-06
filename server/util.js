// 工具库

var crypto = require("crypto");

// 增加用户到用户数据库
var addUserToDatabase = function (mySessionKey, password) {
	return;
}

// 从用户数据库中获取用户收藏（简略信息）
var getUserFavoriteBymySessionKey = function (mySessionKey) {
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
var addItemToDatabase = function (mySessionKey, item) {
	return true;
}

// 制作自定义session_key
var makeMySessionKey = function (session_key) {
	return crypto.createHash('sha1').update(session_key, 'utf8').digest('hex');
}

module.exports = {
	addUserToDatabase: addUserToDatabase,
	getUserFavoriteBymySessionKey: getUserFavoriteBymySessionKey,
	searchByKeywords: searchByKeywords,
	addItemToDatabase: addItemToDatabase,
	makeMySessionKey: makeMySessionKey
};