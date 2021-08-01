Page({
  data: {
    avatarUrl:"../../assets/images/avatar.png"
  },
  onLogin(){
    wx.navigateTo({
      url: '../welcome/welcome',
    })
  }
});