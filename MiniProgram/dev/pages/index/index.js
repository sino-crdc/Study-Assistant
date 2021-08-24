import { navTo } from "../../utils/common";

Page({
  data: {
    keyword: ''
  },
  onChange: function (e) {
    console.log(e.detail),
      this.setData({
        keyword: e.detail
      })
  },
  onClick: function () {
    var keyword = this.data.keyword;
    if (keyword.trim()) {//输入合法性判断 
      navTo('searchEntry', `?keyword=${keyword}`);
    } else {
      this.setData({
        keyword: ''
      })
    }
  },
  onSearch: function () {
    this.onClick();
  },
  //重显自动置空
  onShow: function () {
    this.setData({
      keyword: ''
    })
  }
});