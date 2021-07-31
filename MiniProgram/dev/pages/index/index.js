Page({
    data: {
        value:''
    },
    onChange: function(e){
        this.setData({
            value: e.detail.value
          })
    },
    onClick: function(){
        wx.setStorage({
            data: this.data.value,
            key: 'keyword',
          }),
        wx.navigateTo({
          url: `../vocsearch/vocsearch`
        })
    },
    onSearch: function(){
        wx.setStorage({
            data: this.data.value,
            key: 'keyword',
          }),
        wx.navigateTo({
            url: `../vocsearch/vocsearch`
          })
    },
    onShow: function(){
        var that = this;
        wx.getStorage({
          key: 'keyword',
          success: function (res) {
            console.log(res);
            that.setData({
              value: res.data
            });
          },
        })
    }
});