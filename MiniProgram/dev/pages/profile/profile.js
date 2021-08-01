Page({
  data: {
    avatarUrl:"../../assets/images/avatar.png"
  },
  onGetUserInfo(e){
    const {userInfo}=e.detail;
    wx.setStorageSync('userinfo', userInfo)
  },
  onLogin(){
    wx.navigateTo({
      url: '../welcome/welcome',
    })
  }
});