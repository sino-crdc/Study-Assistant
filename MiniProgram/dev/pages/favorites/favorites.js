import { request } from "../../request/request.js";

Page({
  data: {
    edit: true,
    userFav: [],
    flag: false,
    netErr: false
  },
  onLoad(options) {
    request({url: "/favorites",
          // data: {"user_id": ""}
    }).then(
        (res)=>{
          this.setData({userFav: res.data.data.userFav});
          this.setData({netErr: false, flag: false});
        },()=>{
          console.log("err");
          this.setData({netErr: true});
        }).then(
          ()=>{
            this.setData({loading: false});
            if (!this.data.userFav && !netErr){
              this.setData({flag: true});
            }
        })
  },
  onEdit(){
    var edit = this.data.edit;
    this.setData({edit: !edit})
  },
  onDetail(e){
    var voc = e.currentTarget.dataset.voc;
    wx.navigateTo({
      url: '../vocdetail/vocdetail?voc=' + voc,
    })
  }
});