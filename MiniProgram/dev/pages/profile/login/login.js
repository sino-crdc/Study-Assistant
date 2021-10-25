import { navTo } from "../../../utils/common";
import { login } from "../../../utils/login";
import { request } from "../../../utils/request";
import {convertUserInfo} from "../../../utils/common";

Page({
  data: {},
  myLogin: async function (code, userinfo) {
    let res = await request({
      url: "/login",
      data: { 'code': code, 'userinfo': userinfo },
      method: "POST",
    });
    return res;
  },
  getInfo() {
    wx.getUserProfile({
      desc: "用于收藏等功能",
      success: (res) => {
        const userinfo = convertUserInfo(res.userInfo);
        wx.setStorageSync("userinfo", userinfo);
        console.log(userinfo);
        this.onLogin(userinfo);
      },
      fail:(err)=>{
        //Todo
      }
    });
  },
  async onLogin(userinfo) {
    try {
      const code = await login();
      console.log(code);
      const info = this.myLogin(code,userinfo);
      wx.setStorageSync("user_id", info.data.user.id);
      wx.setStorageSync("isLogin", true);
      wx.navigateBack({
        delta: 1,
      });
      console.log(info);
    } catch {
      //?Doing 失敗消息
      console.log("login err");
      //Test true ---> false
      wx.setStorageSync("isLogin", false);
      wx.navigateBack({
        delta: 1,
      });
    }
  },
  onClick() {
    navTo({ page: "index" });
  },
});
