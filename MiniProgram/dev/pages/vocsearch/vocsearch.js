import { request } from "../../request/request.js"

Page({
  data: {
    value:'',
    resultList:[]
  },
  onChange(e) {
    wx.setStorage({
      data: e.detail.value,
      key: 'keyword',
    }),
    this.setData({
      value: e.detail.value
    });
  },
  onSearch() {
    request({url: 'https://api.zzzsy.top/xxx/xxx',
             data: this.value
    })
    .then(result =>{
      this.setData({
        resultList:result.message.resultList
      })
    });
  },
  onClick() {
    request({url: 'https://api.zzzsy.top/xxx/xxx',
             data: this.value
    })
    .then(result =>{
      this.setData({
        resultList: result.message.resultList
      })
    });
  },
  onShow: function() {
    var that = this;
    wx.getStorage({
      key: 'keyword',
      success: function (res) {
        that.setData({
          value: res.data
        });
      },
    })
  },
});