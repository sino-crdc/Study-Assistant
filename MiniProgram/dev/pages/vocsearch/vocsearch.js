Page({
  data: {
    value: '',
    resultList:[],
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    wx.request({
      url: 'https://api.zzzsy.top/xxx/xxx',
      data:{value},
      success: (result) => {
        this.setData({
          resultList:result.message.resultList
        });
      }
    });
  },
  onClick() {
    wx.request({
      url: 'https://api.zzzsy.top/xxx/xxx',
      data:{value},
      success: (result) => {
        this.setData({
          resultList:result.message.resultList
        });
      }
    });
  },
  onShareAppMessage() {
    return {
      title: '',
    };
  },
});