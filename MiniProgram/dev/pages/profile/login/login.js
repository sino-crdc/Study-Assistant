import { navTo } from "../../../utils/common";
import { login } from "../../../utils/login";
import { request } from "../../../utils/request";

Page({
  data: {},
  //Todo 与服务器通信
  myLogin: async function (code, userInfo) {
    let res = await request({
      url: "/login",
      data: { 'code': code, 'userinfo': userInfo },
      method: "post",
    });
    return res;
  },
  getInfo() {
    wx.getUserProfile({
      desc: "用于收藏等功能",
      success: (res) => {
        const userInfo = res.userInfo;
        wx.setStorageSync("userinfo", userInfo);
        console.log(userInfo);
        this.onLogin(userInfo);
      },
    });
  },
  async onLogin(userInfo) {
    try {
      const code = await login();
      console.log(code);
      const info = this.myLogin(code,userInfo);
      wx.setStorageSync("user_id", info.data.user.id);
      wx.setStorageSync("isLogin", true);
      wx.navigateBack({
        delta: 1,
      });
      console.log(info);
    } catch {
      //Todo
      console.log("login err");
      wx.setStorageSync("isLogin", true);
      wx.navigateBack({
        delta: 1,
      });
    }
  },
  onClick() {
    navTo({ page: "index" });
  },
});
