import { navTo } from "../../../utils/common";
import { login } from "../../../utils/login";
import { request } from "../../../utils/request";
import { convertUserInfo } from "../../../utils/common";

Page({
  data: {},
  myLogin: async function (code, userinfo) {
    let res = await request({
      url: "/login",
      data: { code: code, userinfo: userinfo },
      method: "POST",
    });
    console.log(res);
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
      fail: (err) => {
        //Todo
      },
    });
  },
  async onLogin(userinfo) {
    try {
      const code = await login();
      const info = await this.myLogin(code.code, userinfo);
      wx.setStorageSync("user_id", info.data.data.user_id);
      wx.setStorageSync("isLogin", true);
      wx.navigateBack({
        delta: 1,
      });
    } catch {
      console.log("login err");
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
