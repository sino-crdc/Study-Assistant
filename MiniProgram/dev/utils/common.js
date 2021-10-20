import pages from "./config";

const ifExistUserId = () => {
  if (!wx.getStorageSync("user_id")) {
    return false;
  } else {
    return true;
  }
};

const navTo = (params, success_callback, fail_callback) => {
  let page = params.page;
  let args = params.args || "";
  let s_callback = success_callback || null;
  let f_callback = fail_callback || null;
  if (page != "index" && page != "profile") {
    wx.navigateTo({
      url: pages[page] + args,
      success(res) {
        if (typeof s_callback === "function") {
          s_callback(res);
        }
      },
      fail(err) {
        if (typeof f_callback === "function") {
          f_callback(err);
        }
      },
    });
  } else {
    wx.switchTab({
      url: pages[page] + args,
      success(res) {
        if (typeof s_callback === "function") {
          s_callback(res);
        }
      },
      fail(err) {
        if (typeof f_callback === "function") {
          f_callback(err);
        }
      },
    });
  }
};
const convertUserInfo = (userInfo)=>{
  let userinfo ={};
  userinfo.avatar_url = userInfo.avatarUrl;
  userinfo.nick_name = userInfo.nickName;
  userinfo.city = userInfo.city;
  userinfo.country = userInfo.country;
  userinfo.gender = userInfo.gender;
  userinfo.language = userInfo.language;
  userinfo.province = userInfo.province;
  return userinfo;
}

export { ifExistUserId, navTo, convertUserInfo };

// export default (...params) => {
//   return {
//     ifExistUserId: ifExistUserId(),
//     navTo: navTo(...params),
//     convertUserInfo: convertUserInfo(...params)
//   }
// }
