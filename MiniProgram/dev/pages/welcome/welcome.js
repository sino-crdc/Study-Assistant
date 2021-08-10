import { request } from "../../request/request.js"

Page({
  data: {
  },
  onLogin(){
    wx.login({
      success(res){
        console.log(res.code);
        request({
          url: 'https://api.xxx.top/login/',
          data: {code: res.code},
        })
        .then(result =>{
          console.log(result.data)
        })
      }
    });
    wx.getUserProfile({
      desc: '用于收藏等功能',
      success: (res) => {
        const userInfo = res.userInfo;
        wx.setStorageSync('userinfo', userInfo);
        console.log(userInfo);
        const info = wx.getStorageSync('userinfo');
        console.log(info);
        wx.navigateBack({
          delta: 1
        })
      }
    })
  }, 
  onClick(){
    wx.switchTab({
      url: '../index/index',
    })
  }
});