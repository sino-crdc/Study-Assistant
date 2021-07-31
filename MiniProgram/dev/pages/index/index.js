Page({
  data: {
    value: ''
  },
  onChange: function (e) {
    console.log(e.detail),
      this.setData({
        value: e.detail
      })
  },
  onClick: function () {
    wx.setStorage({
      data: this.data.value,
      key: 'keyword',
    });
    if (this.data.value.trim()) {
      wx.navigateTo({
        url: `../vocsearch/vocsearch`
      })
    } else {
      this.setData({
        value: ''
      })
    }
  },
  onSearch: function () {
    wx.setStorage({
      data: this.data.value,
      key: 'keyword',
    });
    if (this.data.value.trim()) {
      wx.navigateTo({
        url: `../vocsearch/vocsearch`
      })
    } else {
      this.setData({
        value: ''
      })
    }
  },
  onShow: function () {
    this.setData({
      value: ''
    })
  }
});