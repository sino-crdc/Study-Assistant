import { request } from "../../utils/request";
// import { request_test } from '../../utils/request';//Test
import Toast from "../../components/vant/toast/toast";
import { navTo } from "../../utils/common";
import pageStates from "../../utils/pageState";
import pageState from "../../utils/pageState";
const app = getApp();

Page({
  data: {
    detail: {},//转码后的内容
    entryDetail: {},//未转码的内容
    entry_id: 0,
    netErr: false,
    show: {//控制类别是否显示
      content: true,
      proof: true,
      remark: true,
      example: true,
      source: true,
    },
    no_entry: false,//?
    is_collection: false,//词条是否被收录
    // haslogin:  是否登录
  },
  /**
   * @param {no_voc, voc_id}
   * @description 通过entry_id显示detail
   */

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
  showDetail: async function (entry_id) {
    const _ts = this;
    const pageState = pageStates(_ts);
    pageState.loading();
    try {
      const res = await request_test({
        url: "/entrydetail",
        // header: {
        //   'content-type': 'application/x-www-form-urlencoded',
        // },
        data: {
          entry_id: entry_id,
        },
      });
      _ts.setData({
        entryDetail: res.data.data.entry_detail,
      });
      _ts.setTowxml();
    } catch {
      pageState.error();
      console.log("neterr");
    }
  },
  //Todo
  onEdit(e) {
    var type = e.currentTarget.id;
    var voc_id = this.data.voc_id;
    const _ts = this;
    const success_callback = (res) => {
      if (type == "title") {
        res.eventChannel.emit(
          "onL",
          _ts.data.vocdata.detail.title + "\n" + _ts.data.vocdata.detail.chinese
        );
      } else {
        res.eventChannel.emit("onL", _ts.data.vocdata.detail[type]);
      }
    };
    navTo(
      {
        page: "editEntry",
        args: `?type=${type}&voc_id=${voc_id}`,
      },
      success_callback
    );
  },
  setTowxml() {
    const { theme } = wx.getSystemInfoSync();
    const _ts = this;
    const detail = _ts.data.entry_detail;
    let title = detail.title;
    let content = app.towxml(detail.content, "markdown", {
      theme: theme,
      events: {
        tap: (e) => {
          _ts.nav(e);
        },
      },
    });
    let proof = app.towxml(detail.proof, "markdown", {
      theme: theme,
      events: {
        tap: (e) => {
          _ts.nav(e);
        },
      },
    });
    let remark = app.towxml(detail.remark, "markdown", {
      theme: theme,
      events: {
        tap: (e) => {
          _ts.nav(e);
        },
      },
    });
    let example = app.towxml(detail.example, "markdown", {
      theme: theme,
      events: {
        tap: (e) => {
          _ts.nav(e);
        },
      },
    });
    let source = detail.source;
    let chinese = detail.chinese;
    let author = detail.author;
    _ts.setData({
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
  nav: async function (e) {
    if (e.currentTarget.dataset.data.tag == "navigator") {
      var entry = e.currentTarget.dataset.data.attrs.href;
      try {
        const res = await request({
          url: "/entry_id",
          data: {
            entry: entry,
          },
        });
        if (res.data.data.code == 200) {
          navTo({
            page: "entryDetail",
            args: `?no_voc=0&voc_id=${res.data.data.entry_id}`,
          });
        } else {
          navTo({ page: "entryDetail", args: `?no_voc=1` });
        }
      } catch {
        pageState.error();
      }
    }
  },
  isShow: function (e) {
    var t = e.currentTarget.id;
    var s = this.data.show[t];
    var r = "show." + t;
    this.setData({
      [r]: !s,
    });
  },
  async onCollectThisEntry() {
    const user_id = wx.getStorageSync("user_id");
    try {
      const res = await request({
        url: "/fav",
        data: {
          user_id: user_id,
          entry_id: entry_id,
        },
      });
      if (res.data.data.code == 200) {
        this.setData({ is_fav: !this.data.is_fav });
        Toast({ messgae: "收藏成功！", position: "bottom" });
      } else if (res.dataa.data.code == 201) {
        Toast({ message: "取消收藏成功！", position: "bottom" });
      } else {
        this.data.is_fav == true
          ? Toast({ message: "取消收藏失败", position: "bottom" })
          : Toast({ message: "收藏失败", position: "bottom" });
      }
    } catch {
      this.data.is_fav == true
        ? Toast({ message: "取消收藏失败", position: "bottom" })
        : Toast({ message: "收藏失败", position: "bottom" });
    }
  },
  onEditThisEntry() {},
});
