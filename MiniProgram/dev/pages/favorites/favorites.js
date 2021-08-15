import { request } from "../../request/request.js";

Page({
  data: {
    management: false, //控制管理条目（即复选框是否显示）
    userFav: [], //条目列表
    no_fav: false, //控制没有条目的提示
    netErr: false, //控制网络错误的提示
    loading: true, //控制是否正在加载的提示
    select_all: false, //是否全选
    userFav_management: [],//与checkbox关联的条目列表
  },
  onLoad(options) {
    request({
      url: "/favorites",
      // data: {"user_id": ""}
    }).then(
      (res) => {
        this.setData({ userFav: res.data.data.userFav });
        this.setData({
          netErr: false,
          no_fav: false,
          loading: false
        });
        this.init();
      }, () => {
        console.log("network err");
        this.setData({
          netErr: true,
          loading: false
        });
        console.log(this.data.netErr);
      }).then(
      () => {
        this.setData({
          loading: false
        });
        if (this.data.userFav.length == 0 && !this.data.netErr) {
          this.setData({
            no_fav: true
          });
        }
      });
  },
  //开启条目管理
  onManage() {
    this.setData({
      management: true
    })
  },
  //关闭管理条目
  offManage() {
    this.setData({
      management: false
    });
    this.init();
  },
  //点击跳转详情
  onDetail(e) {
    var voc = e.currentTarget.dataset.voc;
    console.log(voc);
    wx.navigateTo({
      url: '../vocdetail/vocdetail?voc=' + voc,
    })
  },
  init(){
    var arr = this.data.userFav;
    var arr2 = [];
    arr.map(((item)=>{
      arr2.push(Object.assign({},item,{checked: false}))
    }));
    console.log(arr2);
    this.setData({userFav_management: arr2});
  },
  //条目选择
  select: function (e) {
    const _ts = this;
    if (_ts.data.manegement == false) {
      return;
    } else {
      var arr = _ts.data.userFav_management;
      var index = e.currentTarget.dataset.id;
      arr[index].checked = !arr[index].checked;
      console.log(arr);
      _ts.setData({ userFav_management: arr });
    }
  },
  //删除条目
  delete:function(){
    const _ts = this;
    var 
  }
});