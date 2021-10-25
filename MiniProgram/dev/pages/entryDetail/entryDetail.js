import { request } from "../../utils/request";
// import { request_test } from '../../utils/request';//Test
import Toast from "../../components/vant/toast/toast";
import { navTo } from "../../utils/common";
import pageStates from "../../utils/pageState";

const app = getApp();
const pageState = pageStates(this);

Page({
  data: {
    detail: {}, //转码后的内容
    entryDetail: {}, //未转码的内容
    entry_id: 0,
    netErr: false,
    show: {
      //控制类别是否显示
      content: true,
      proof: true,
      remark: true,
      example: true,
      source: true,
    },
    no_entry: false, //?
    is_collection: false, //词条是否被收录
    // haslogin:  是否登录
  },
 
  //*Done
  onLoad(options) {
    this.setData({ haslogin: app.globalData.haslogin });
    const entry_id = options.entry_id;
    this.setData({ entry_id });
    if (options.no_entry == 1) {
      this.setData({
        no_entry: true,
      });
    } else {
      this.setData({
        no_entry: false,
      });
      this.showDetail(entry_id);
    }
  },
  //*Done
  showDetail: async function (entry_id) {
    pageState.loading();
    try {
      const res = await request({
        url: "/entrydetail",
        // header: {
        //   'content-type': 'application/x-www-form-urlencoded',
        // },
        data: {
          entry_id: entry_id,
        },
      });
      this.setData({
        entryDetail: res.data.data.entry_detail,
      });
      this.setTowxml();
    } catch {
      pageState.error();
      console.log("neterr");
    }
  },
  //?Doing
  onEdit(e) {
    var type = e.currentTarget.id;
    var entry_id = this.data.entry_id;
    const _ts = this;
    //Todo
    const success_callback = (res) => {
      if (type == "title") {
        res.eventChannel.emit(
          "onL",
          _ts.data.entryDetail.title + "\n" + _ts.data.entryDetail.chinese
        );
      } else {
        res.eventChannel.emit("onL", _ts.data.entryDetail[type]);
      }
    };
    navTo(
      {
        page: "editEntry",
        args: `?type=${type}&entry_id=${entry_id}`,
      },
      success_callback
    );
  },
  //*Done
  setTowxml() {
    const { theme } = wx.getSystemInfoSync();
    const detail = this.data.entry_detail;
    let title = detail.title;
    let content = app.towxml(detail.content, "markdown", {
      theme: theme,
      events: {
        tap: (e) => {
          this.nav(e);
        },
      },
    });
    let proof = app.towxml(detail.proof, "markdown", {
      theme: theme,
      events: {
        tap: (e) => {
          this.nav(e);
        },
      },
    });
    let remark = app.towxml(detail.remark, "markdown", {
      theme: theme,
      events: {
        tap: (e) => {
          this.nav(e);
        },
      },
    });
    let example = app.towxml(detail.example, "markdown", {
      theme: theme,
      events: {
        tap: (e) => {
          this.nav(e);
        },
      },
    });
    let source = detail.source;
    let chinese = detail.chinese;
    let author = detail.author;
    this.setData({
      "detail.title": title,
      "detail.content": content,
      "detail.proof": proof,
      "detail.remark": remark,
      "detail.example": example,
      "detail.source": source,
      "detail.chinese": chinese,
      "detail.author": author,
    });
    pageState.finish();
  },
  //?Doing
  //Todo
  nav: async function (e) {
    if (e.currentTarget.dataset.data.tag == "navigator") {
      var entry = e.currentTarget.dataset.data.attrs.href;
      try {
        const res = await request({
          url: "/getentry_id",
          data: {
            entry: entry,
          },
        });
        //?Todo
        if (res.data.Statuscode == 200) {
          navTo({
            page: "entryDetail",
            args: `?no_entry=0&entry_id=${res.data.data.entry_id}`,
          });
        } else {
          navTo({ page: "entryDetail", args: `?no_entry=1` });
        }
      } catch {
        pageState.error();
      }
    }
  },
  //*Done
  isShow: function (e) {
    var t = e.currentTarget.id;
    var s = this.data.show[t];
    var r = "show." + t;
    this.setData({
      [r]: !s,
    });
  },
  //*Done
  async onCollectThisEntry() {
    const user_id = wx.getStorageSync("user_id");
    try {
      const res = await request({
        url: "/collection/addentry",
        data: {
          user_id: user_id,
          entry_id: entry_id,
        },
      });
      if (res.data.data.status == "collection_ok") {
        this.setData({ is_collection: true });
        Toast({ messgae: "收藏成功！", position: "bottom" });
      } else if (res.data.data.status == "uncollection_ok") {
        this.setData({ is_collection: false });
        Toast({ message: "取消收藏成功！", position: "bottom" });
      } else if (res.data.data.status == "collection_err") {
        Toast({ message: "收藏失败", position: "bottom" });
      } else {
        Toast({ message: "取消收藏失败", position: "bottom" });
      }
    } catch {
      this.data.is_collection == true
        ? Toast({ message: "取消收藏失败", position: "bottom" })
        : Toast({ message: "收藏失败", position: "bottom" });
    }
  },
  onEditThisEntry() {
    
  },
});
