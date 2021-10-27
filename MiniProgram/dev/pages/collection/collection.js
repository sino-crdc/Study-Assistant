import { navTo } from '../../utils/common';
import { request } from '../../utils/request';
import pageStates from '../../utils/pageState';

Page({
  data: {
    collection: [],
    management: false, //控制管理条目（即复选框是否显示）
    select_all: false, //是否全选
    userCollection_management: [], //与checkbox关联的条目列表
    checked_num: 0, //选择的条数
  },
  async onLoad(options) {
    //!Doing
    // this.onUnload();
    const pageState = pageStates(this);
    pageState.loading();
    try {
      const res = await request({
        url: '/collection/sync',
        data: {
          user_id: wx.getStorageSync('user_id'),
        },
        method: 'POST',
      });
      const userCollection = res.data.data.collection_list;
      wx.setStorageSync('userCollection', userCollection);
      this.setData({collection: userCollection});
      this.init();
    } catch {
      pageState.error()
      console.log('err in getting collection')
    };
    if (
      this.data.collection.length == 0 &&
      this.data.pageState.state != "error"
    ) {
      console.log("search empty")
      pageState.empty();
    }
  },
  //开启条目管理
  onManage() {
    this.setData({
      management: true,
    });
  },
  //关闭管理条目
  offManage() {
    this.setData({
      management: false,
    });
    this.select_none();
  },
  //点击跳转详情
  onDetail(e) {
    var entry_id = e.currentTarget.dataset.entry_id;
    navTo({ page: "entryDetail", args: `?entry_id=${entry_id}` });
  },
  //初始化，将本地存储添加checked属性，用于页面展示
  init: function () {
    const pageState = pageStates(this);
    var arr = wx.getStorageSync("userCollection");
    var arr2 = [];
    arr.map((item) => {
      arr2.push(Object.assign({}, item, { checked: false }));
    });
    console.log("init");
    this.setData({ userCollection_management: arr2 });
    pageState.finish();
  },
  //条目选择
  select: function (e) {
    const _ts = this;
    if (_ts.data.manegement == false) {
      return;
    } else {
      var arr = _ts.data.userCollection_management;
      var index = e.currentTarget.dataset.idx;
      arr[index].checked = !arr[index].checked;
      if (arr[index].checked) {
        _ts.setData({ checked_num: _ts.data.checked_num + 1 });
      } else {
        _ts.setData({ checked_num: _ts.data.checked_num - 1 });
      }
      console.log(arr);
      _ts.setData({ userCollection_management: arr });
    }
  },
  //删除条目
  delete: function () {
    const _ts = this;
    var arr = _ts.data.userCollection_management;
    var arr2 = [];
    var arr3 = wx.getStorageSync("userCollection");
    var arr4 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].checked == false) {
        arr2.push(arr[i]);
        arr4.push(arr3[i]);
      }
    }
    wx.setStorageSync("userCollection", arr4);
    wx.setStorageSync("need_submit", true);
    _ts.setData({ userCollection_management: arr2, checked_num: 0 });
  },
  //全选
  select_all: function () {
    var arr = this.data.userCollection_management;
    for (let i = 0; i < arr.length; i++) {
      arr[i].checked = true;
    }
    this.setData({ userCollection_management: arr, checked_num: arr.length });
  },
  //取消全选
  select_none: function () {
    var arr = this.data.userCollection_management;
    for (let i = 0; i < arr.length; i++) {
      arr[i].checked = false;
    }
    this.setData({ userCollection_management: arr, checked_num: 0 });
  },
  //向服务器提交
  submit: async function () {
    try {
      const res = await request({
        url: "/collection/submit",
        data: {
          user_collection: wx.getStorageSync("userCollection"),
          user_id: wx.getStorageSync("user_id"),
        },
        method:"POST",
      });
      console.log(wx.getStorageSync('userCollection'))
      console.log(res)
      if (res.data.data.updated){
        wx.setStorageSync('need_submit', false);
      }
    } catch (err) {
      console.log('err in submit collection to server'+err);
    }
  },
  onUnload() {
    const need_submit = wx.getStorageSync("need_submit");
    console.log("collection submit")
    if (need_submit==true) {
      this.submit();
    }
  },
});
