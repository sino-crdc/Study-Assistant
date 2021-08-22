Page({
  data: {

  },
  setPaste(e){
    console.log(e);
    wx.setClipboardData({
      data: e.currentTarget.id==1?'zzzsy@bk.ru':'zsyyy_8',
    })
  }
});