import { navTo } from '../../utils/common';
import {request} from '../../utils/request';
import pageStates from "../../utils/pageState"

Page({
  data: {
    user_edit: [],
  },
  async onLoad(options) {
    const pageState = pageStates(this);
    pageState.loading();
    try {
      const res = await request({
        url: '/useredit',
        data: {
          user_id: wx.getStorageSync('user_id'),
        },
        method:"POST",
      });
      wx.setStorageSync('useredit', res.data.data.useredit);
      this.setData({user_edit: wx.getStorageSync('useredit')});
    } catch(err) {
      console.log("error in 'myEdit.js:23'")
      console.log(err);
    };
    
    
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