// 后端总控制中心

var express = require('express');
var config = require('./config');
var login =  require('./login');
var favorite = require('./favorite');
var search = require('./search');
var addItem = require('./addItem');
var detail = require('./detail');

var app = express();
var port = config.port;

// 测试部分
app.get('/', function(req, res){
	res.end("Hello commander!");
});

// 以下某些项可以改用POST请求
// 用户登陆
app.get('/login', login);

// 用户收藏
app.get('/favorite', favorite);

// 详细信息展示
app.get('/detail', detail);

// 搜索内容
app.get('/search', search);

// 添加词条
app.get('/addItem', addItem);

// 开启监听窗口
app.listen(port, function(err){
	if(err) {
		console.log(err.message);
	}

	console.log("Server has started! Listening on localhost:" + port);
});