import { pages, version, contact } from "./config";

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
const convertUserInfo = (userInfo) => {
  let userinfo = {};
  userinfo.avatar_url = userInfo.avatarUrl;
  userinfo.nick_name = userInfo.nickName;
  userinfo.city = userInfo.city;
  userinfo.country = userInfo.country;
  userinfo.gender = userInfo.gender;
  userinfo.language = userInfo.language;
  userinfo.province = userInfo.province;
  return userinfo;
};

const convertDetail = (datail) => {
  let edDetail = {};
  edDetail.title = datail.title;
  edDetail.content = datail.content;
  edDetail.proof = datail.proof;
  edDetail.remark = datail.remark;
  edDetail.example = datail.example;
  edDetail.source = datail.source;
  edDetail.chinese = datail.chinese;
  return edDetail;
};
const getVersion = () => {
  return version;
};

const getContact = ()=>{
  return contact;
}

export { navTo, convertUserInfo, getVersion, getContact, convertDetail };
