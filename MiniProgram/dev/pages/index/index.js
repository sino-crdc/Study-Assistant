Page({
    data: {
        value:''
    },
    onChange: function(e){
        this.setData({
            value: e.detail
          })
    },
    onClick: function(){
        var value = this.data.value;
        console.log(value);
        wx.navigateTo({
          url: `../vocsearch/vocsearch?keyword=${value}`
        })
    },
    onSearch: function(){
        var value = this.data.value;
        wx.navigateTo({
            url: `../vocsearch/vocsearch?keyword=${value}`
          })
    },
});