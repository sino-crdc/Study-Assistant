import { navTo } from '../../../utils/common';
import { request } from '../../../utils/request'

Page({
  data: {
  },
  onLogin(){
    wx.login({
      success(res){
        console.log(res.code);
        request({
          url: '/login',
          method: 'POST',
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
    navTo({page: 'index'});
  }
});