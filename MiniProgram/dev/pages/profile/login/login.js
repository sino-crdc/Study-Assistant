import { navTo } from '../../../utils/common';
import { login } from '../../../utils/login';
import { request } from '../../../utils/request'

Page({
  data: {
  },
  //Todo 与服务器通信
  myLogin: async function (code){
    let res = await request({
      url: '/login',
      data: {code},
      method: 'post'
    });
    return res;
  },
  async onLogin(){
    try {
      const code = await login();
      const info = await this.myLogin(code);
      console.log(info);
    } catch {
      //ToDo err
    };
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