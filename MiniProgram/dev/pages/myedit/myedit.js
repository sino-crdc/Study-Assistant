import {request} from "../../request/request";

Page({
  data: {
    netErr: false,
    loading: false,
    no_edit: false,
    user_edit: [],

  },
  async onLoad(options) {
    this.setData({loading: true});
    try {
      const res = await request({
        url: "/useredit",
        data: {
          user_id: wx.getStorageSync('user_id'),
        }
      });
      wx.setStorageSync('useredit', res.data.data.useredit);
      this.setData({user_edit: wx.getStorageSync('useredit')});
    } catch {
      this.setData({netErr: true});
    };
    this.setData({loading: false});
    if (wx.getStorageSync('useredit').length == 0 && !netErr){
      this.setData({no_edit: true});
    }
  },
  onDetail(e){
    var {voc} = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../vocdetail/vocdetail?voc=' + voc,
    });
  },
  onAdd(){
    console.log("add");
  }
});