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
    if (keyword.trim()) {
      wx.navigateTo({
        url: '../vocsearch/vocsearch?key=' + keyword
      })
    } else {
      this.setData({
        keyword: ''
      })
    }
  },
  onSearch: function () {
    this.onClick();
  },
  onShow: function () {
    this.setData({
      keyword: ''
    })
  }
});