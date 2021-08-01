Page({
  data: {

  },
  onGetUserProfile(e){
    const {userInfo}=e.detail;
    wx.setStorageSync('userinfo', userInfo);
    console.log(userInfo);
  }, 
  onClick(){
    wx.switchTab({
      url: '../index/index',
    })
  }
});