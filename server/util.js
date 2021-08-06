// 工具库

// 在用户数据库中查找，验证用户名是否存在
var isUsernameExisted = function (username) {
	return true;
};

// 从用户数据库中通过用户名获取用户
var getPasswordByUsername = function (username) {
	return "123";
};

// 增加用户到用户数据库
var addUserToDatabase = function (username, password) {
	return;
}

// 从用户数据库中获取用户收藏
var getUserFavoriteByUsername = function (username) {
	var uf = [
		{
			"id": 1,
			"title": "Theoreme de Lagrenge",
			"content": "blablabla..."
		},
		{
			"title": "Theoreme du milieu",
			"content": "bla..."
		}
	];
	return uf;
}

var searchByKeywords = function (keywords, username) {
	var resultList = {};
	return resultList;
}

var addItemToDatabase = function (username, item) {
	return true;
}

module.exports = {
	isUsernameExisted: isUsernameExisted,
	getPasswordByUsername: getPasswordByUsername,
	addUserToDatabase: addUserToDatabase,
	getUserFavoriteByUsername: getUserFavoriteByUsername,
	searchByKeywords: searchByKeywords,
	addItemToDatabase: addItemToDatabase
};