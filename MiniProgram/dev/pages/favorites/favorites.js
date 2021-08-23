import { request } from '../../utils/request';

Page({
  data: {
    management: false,      //控制管理条目（即复选框是否显示）
    no_fav: false,          //控制没有条目的提示
    netErr: false,          //控制网络错误的提示
    loading: true,          //控制是否正在加载的提示
    select_all: false,      //是否全选
    userFav_management: [], //与checkbox关联的条目列表
    checked_num: 0,         //选择的条数
  },
  async onLoad(options) {
    //判断本地存储情况
    if (wx.getStorageSync('userFav').length == 0 || !wx.getStorageSync('userFav_token')){
        this.sync();
    }else{
      try {
        // 请求比较本地存储的token
        const res = await request({
          url: "/favorites",
          data: {
            "status": "compare",
            "token": wx.getStorageSync('userFav_token'),
            "user_id": wx.getStorageSync('user_id'),
          }
        });
        if (res.data.data.code==601){
          this.submit();
        } else if (res.data.data.code==602) {
          this.sync();
        };
      } catch {};
      this.setData({loading: false});
      this.init();
    }
  },
  // 向服务器同步拉取
  sync:async function(){
    try {
      const res = await request({
        url: "favorites",
        data: {
          "status": "sync",
          "user_id": wx.getStorageSync('user_id'),
        }
      });
      wx.setStorageSync('userFav', res.data.data.userFav);
      wx.setStorageSync('userFav_token', res.data.data.token);
      this.setData({
        netErr: false,
        no_fav: false,
      });
      this.init();
    } catch {
      console.log("network err");
      this.setData({
        netErr: true,
      });
    }
    this.setData({loading: false});
    if (wx.getStorageSync('userFav').length == 0 && !this.data.netErr){
      this.setData({no_fav: true});
    };
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
    this.select_none();
  },
  //点击跳转详情
  onDetail(e) {
    var voc = e.currentTarget.dataset.voc;
    console.log(voc);
    wx.navigateTo({
      url: '../vocdetail/vocdetail?voc=' + voc,
    })
  },
  //初始化，将本地存储添加checked属性，用于页面展示
  init: function(){
    var arr = wx.getStorageSync('userFav');
    var arr2 = [];
    arr.map(((item)=>{
      arr2.push(Object.assign({},item,{checked: false}))
    }));
    console.log('init');
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
      var index = e.currentTarget.dataset.idx;
      arr[index].checked = !arr[index].checked;
      if (arr[index].checked){
        _ts.setData({checked_num: _ts.data.checked_num+1});
      }else{
        _ts.setData({checked_num: _ts.data.checked_num-1});
      };
      console.log(arr);
      _ts.setData({ userFav_management: arr });
    }
  },
  //删除条目
  delete: function(){
    const _ts = this;
    var arr = _ts.data.userFav_management;
    var arr2 = [];
    var arr3 = wx.getStorageSync('userFav');
    var arr4 = [];
    for (let i=0;i<arr.length;i++){
      if (arr[i].checked == false){
        arr2.push(arr[i]);
        arr4.push(arr3[i]);
      }
    };
    wx.setStorageSync('userFav', arr4);
    _ts.setData({userFav_management: arr2, checked_num: 0});
    this.submit();
  },
  //全选
  select_all: function(){
    var arr = this.data.userFav_management;
    for (let i=0;i<arr.length;i++){
      arr[i].checked = true
    };
    this.setData({userFav_management: arr, checked_num: arr.length});
  },
  //取消全选
  select_none: function(){
    var arr = this.data.userFav_management;
    for (let i=0;i<arr.length;i++){
      arr[i].checked = false
    };
    this.setData({userFav_management: arr, checked_num: 0});
  },
  //向服务器提交并获取token
  submit: async function(){
    var arr = wx.getStorageSync('userFav');
    try {
      const res = await request({
        url: "/favorites",
        data: {
          "status": "submit",
          "data": arr,
          "user_id": wx.getStorageSync('user_id'),
        }
      });
      wx.setStorageSync('userFav_token', res.data.data.token);
    } catch(err) {
      console.log(err);
    }
  }
  
});