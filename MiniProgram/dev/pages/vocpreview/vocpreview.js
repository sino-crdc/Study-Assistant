const app = getApp();

Page({
  data: {
      rawMD: '',
      MD: {}
  },
  onLoad() {
      let _ts = this;
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on("onPre", data=>{
        _ts.setData({
          rawMD: data
        });
          let MD = app.towxml(_ts.data.rawMD, 'markdown');
          _ts.setData({
            MD: MD
          })
      });  
  }
});