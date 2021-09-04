import { navTo } from "../../../utils/common";

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
                  var voc = e.currentTarget.dataset.data.attrs.href;
                  navTo({page: 'entryDeatil', args: `?voc=${voc}`});
                  // wx.navigateTo({
                  //   url: '../vocdetail/vocdetail?voc=' + voc,
                  // })
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