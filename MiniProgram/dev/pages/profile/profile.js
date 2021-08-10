Page({
  data: {
    avatarUrl:"../../assets/images/avatar.png",
    userinfo: {}
  },
  onLogin(){
    wx.navigateTo({
      url: '../welcome/welcome',
    })
  },
  onShow(){
    const userinfo = wx.getStorageSync('userinfo');
    this.setData({ userinfo })
  },
  onAbout(){
    wx.navigateTo({
      url: '../about/about',
    })
  },
  onFav(){
    wx.navigateTo({
      url: '../favorites/favorites',
    })
  },
  onUpload(){
    
  }
});