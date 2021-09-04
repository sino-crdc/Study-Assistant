import { navTo } from "../../utils/common";

Page({
  data: {
    keyword: ''
  },
  onChange: function (e) {
    this.setData({keyword: e.detail})
  },
  onClick: function () {
    var keyword = this.data.keyword;
    if (keyword.trim()) {//输入合法性判断 
      navTo({page: 'searchEntry', args: `?keyword=${keyword}`});
    } else {
      this.setData({keyword: ''})
    }
  },
  //重显自动置空
  onLoad () {
    this.setData({keyword: ''})
  }
});