import { navTo } from "../../../utils/common";
import getEntryId from "../../../utils/getEntryId";

const app = getApp();

Page({
  data: {
      rawMD: '',
      MD: {}
  },
  onLoad() {
      const {theme} = wx.getSystemInfoSync();
      let _ts = this;
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on('onPre', data=>{
        _ts.setData({
          rawMD: data
        });
          let MD = app.towxml(_ts.data.rawMD, 'markdown',{
            theme: theme,
            events:{
              tap:(e)=>{
                if (e.currentTarget.dataset.data.tag=='navigator'){
                  var entry = e.currentTarget.dataset.data.attrs.href;
                  var entry_id_tmp = getEntryId(entry);
                  navTo({page: 'entryDeatil', args: `?entry_id=${entry_id_tmp}`});
                }
              }
            }
          });
          _ts.setData({
            MD: MD
          })
      });  
  }
});