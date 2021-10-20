import Toast from '../../components/vant/toast/toast';
import Dialog from '../../components/vant/dialog/dialog';
import {ifExistUserId, navTo} from '../../utils/common';


Page({
  data: {
    avatarUrl:'../../assets/images/avatar.png',
    isLogin: false,
    // userinfo: {}
  },
  onLogin(){
    navTo({page: 'login'});
  },
  onShow(){
    const isLogin = wx.getStorageSync('isLogin');
    this.setData({isLogin});
    const userinfo = wx.getStorageSync('userinfo');
    this.setData({ userinfo, user: ifExistUserId })
  },
  onAbout(){
    navTo({page: 'about'});
  },
  onFav(){
    if (!ifExistUserId()){
      Toast({message:'无法使用,请先登录~',position: 'bottom'});
    } else {
      navTo({page: 'collection'});
    }
  },
  onEdit(){
    if (!ifExistUserId()){
      Toast({message: '无法使用,请先登录~',position: 'bottom'});
    } else {
      Toast({position: 'bottom', message: '该功能未开放，敬请期待。'});
      // navTo({page: 'myEdit'});
    }
  },
  onAway(){
    const delUser = (action) => new Promise((resolve) => {
      setTimeout(() => {
        if (action === 'confirm') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 3000);
    });
    Dialog.confirm({
      width: 280,
      title: '提示',
      message: '您真的想要清除帐号内容并退出吗?\n该操作不可逆'
    }).then (()=>{
      Dialog.confirm({
        width: 280,
        title: '再次确认',
        message: '确实要删除帐号吗?',
        delUser
      });
    }).catch(()=>{})
  }
});