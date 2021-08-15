# 简介
服务器端代码

# 后端接口
## 用户登录
请求方法：GET  
url：域名/login  
请求参数：   
{   
    code： code //用户登录时微信官生成的code  
}   
返回参数：  
1) 成功：返回用户自定义身份标识mySessionKey(json格式)    
2) 失败：返回字符串“LF”  

## 用户收藏
请求方法：GET  
url：域名/favorite  
请求参数：  
{    
    mySessionKey: mySessionKey  
}    
返回参数：  
1) 成功：返回用户收藏条(json列表)  
2) 用户登录信息失效：返回字符串“LT”   
3) 用户错误：返回字符串“UE”      

## 搜索
请求方法：GET  
url: 域名/search  
请求参数：  
{    
    keywords: keywords,  //搜索关键词  
    mySessionKey: mySessionKey  
}    
返回参数：  
1) 搜索结果（json列表）  

## 详情页  
请求方法：GET  
url: 域名/detail  
请求参数：  
{    
    mySessionKey: mySessionKey,  
    itemid: itemid  //查看条目的id  
}    
返回参数：  
1) 所查看条目的详细内容（json格式）  

## 上传词条
请求方法：GET  
url：域名/addItem  
请求参数：  
{    
    mySessionKey: mySessionKey,  
    item: item  //所要添加的词条  
}    
返回参数：  
1) 成功：返回字符串“S”  
2) 失败：返回字符串“F”  
2) 用户登录信息失效：返回字符串“LT”  
3) 用户错误：返回字符串“UE”    
