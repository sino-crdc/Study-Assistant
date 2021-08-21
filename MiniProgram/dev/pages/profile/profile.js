import Toast from '../../components/vant/toast/toast';

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
    if (!wx.getStorageSync('user_id')){
      Toast({message:"无法使用,请先登录~",position: "bottom"});
    } else {
      wx.navigateTo({
        url: '../favorites/favorites',
      })
    }
  },
  onEdit(){
    if (!wx.getStorageSync('user_id')){
      Toast({message:"无法使用,请先登录~",position: "bottom"});
    } else {
      Toast({position: "bottom", message: "改功能未开放，敬请期待。"});
      // wx.navigateTo({
      //   url: '../myedit/myedit',
      // })
    }
  }
});