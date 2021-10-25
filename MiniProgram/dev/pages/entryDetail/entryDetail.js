import { request } from "../../utils/request";
import Toast from "../../components/vant/toast/toast";
import { navTo } from "../../utils/common";
import pageStates from "../../utils/pageState";
import getEntryId from "../../utils/getEntryId";

Page({
  data: {
    detail: {}, //转码后的内容
    entryDetail: {}, //未转码的内容
    show: {
      //控制类别是否显示
      content: true,
      proof: true,
      remark: true,
      example: true,
      source: true,
    },
  },

  //*Done
  onLoad(options) {
    this.setData({ isLogin: wx.getStorageSync("isLogin") });
    const entry_id = options.entry_id;
    this.setData({ entry_id });
    if (entry_id != 0){
      this.showDetail(entry_id);
    }
  },
  //*Done
  showDetail: async function (entry_id) {
    const pageState = pageStates(this);
    pageState.loading();
    try {
      const res = await request({
        url: "/entrydetail",
        data: {
          entry_id: entry_id,
        },
        method: "POST",
      });
      this.setData({
        entryDetail: res.data.data.entry_detail,
        is_collected: res.data.data.is_collected,
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
    const pageState = pageStates(this);
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
      var entry_id_tmp = getEntryId(entry);
      navTo({
        page: "entryDetail",
        args: `entry_id=${entry_id_tmp}`,
      });
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
  //?Doing
  async onCollectThisEntry() {
    if (this.data.is_collected) {
      try {
        const res = await request({
          url: "/collection/delentry",
          data: {
            user_id: wx.getStorageSync("user_id"),
            entry_id: this.data.entry_id,
          },
          method: "DEL",
        });
        if (res.data.data.status == "success") {
          this.setData({ is_collection: false });
          Toast({ messgae: "取消收藏成功！", position: "bottom" });
        } else {
          Toast({ messgae: "取消收藏失败！", position: "bottom" });
        }
      } catch {
        console.log("net err");
        Toast({ messgae: "取消收藏失败！", position: "bottom" });
      }
    } else {
      try {
        const res = await request({
          url: "/collection/addentry",
          data: {
            user_id: wx.getStorageSync("user_id"),
            entry_id: this.data.entry_id,
          },
          method: "PUT",
        });
        if (res.data.data.status == "success") {
          this.setData({ is_collection: true });
          Toast({ messgae: "收藏成功！", position: "bottom" });
        } else {
          Toast({ messgae: "收藏失败！", position: "bottom" });
        }
      } catch {
        console.log("net err");
        Toast({ messgae: "收藏失败！", position: "bottom" });
      }
    }
  },
  onEditThisEntry() {},
});
