import { navTo } from '../../utils/common';
import {request} from '../../utils/request';

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
        url: '/useredit',
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
    var {entry} = e.currentTarget.dataset;
    //Todo
    navTo({page: 'entryDetail', args: `?entry_id=${entry_id_tmp}`});
  },
  onAdd(){
    console.log('add');
  }
});