import { request } from "../../utils/request";
import Toast from "../../components/vant/toast/toast";
import { navTo } from "../../utils/common";
import pageStates from "../../utils/pageState";
import getEntryId from "../../utils/getEntryId";
import { errors } from "../../utils/config";

const app = getApp();

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
    console.log(options);
    const pageState = pageStates(this);
    this.setData({ isLogin: wx.getStorageSync("isLogin") });
    if (wx.getStorageSync("isLogin") == true) {
      var user_id = wx.getStorageSync("user_id");
    }
    const entry_id = options.entry_id;
    this.setData({ entry_id, user_id });
    if (entry_id != 0) {
      this.showDetail(entry_id, user_id);
    } else {
      pageState.empty();
    }
  },
  onShow() {
    this.showDetail(this.data.entry_id, this.data.user_id);
  },
  //*Done
  showDetail: async function (entry_id, user_idd) {
    const pageState = pageStates(this);
    const user_id = user_idd || "0";
    pageState.loading();
    try {
      if (user_id != "0") {
        var res = await request({
          url: "/entry/entrydetail",
          data: {
            entry_id: entry_id,
            user_id: user_id,
          },
          method: "GET",
        });
      } else {
        var res = await request({
          url: "/entry/entrydetail",
          data: {
            entry_id: entry_id,
          },
          method: "GET",
        });
      }
      console.log(res);
      this.setData({
        entryDetail: res.data.data.entry_detail,
        is_collected: res.data.data.is_collected,
      });
      this.setTowxml();
    } catch (err) {
      if (res.data == errors.no_entry) {
        pageState.empty();
      } else {
        pageState.error();
        console.log("error in 'entryDetail.js:74'");
        console.log(err);
      }
    }
  },
  //?Doing
  onEdit(e) {
    var type = e.currentTarget.id;
    var entry_id = this.data.entry_id;
    const _ts = this;
    const success_callback = (res) => {
      res.eventChannel.emit("onL", _ts.data.entryDetail[type]);
    };
    navTo(
      {
        page: "editEntry",
        args: `?type=${type}&entry_id=${entry_id}`,
      },
      success_callback
    );
  },

  setTowxml() {
    const pageState = pageStates(this);
    const { theme } = wx.getSystemInfoSync();
    const detail = this.data.entryDetail;
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
  nav: async function (e) {
    if (e.currentTarget.dataset.data.tag == "navigator") {
      var entry = e.currentTarget.dataset.data.attrs.href;
      var entry_id_tmp = await getEntryId(entry);
      if (this.data.entry_id != entry_id_tmp) {
        wx.navigateTo({
          url: `/pages/entryDetail/entryDetail?entry_id=${entry_id_tmp}`,
        });
      }
    }
  },
  //*Done
  isShow: function (e) {
    var type = e.currentTarget.id;
    this.setData({
      [`show.${type}`]: !this.data.show[type],
    });
    console.log(this.data.show[type]);
  },
  //?Doing
  async onCollectThisEntry() {
    if (this.data.is_collected) {
      try {
        const res = await request({
          url: "/collection/delentry",
          data: {
            user_id: this.data.user_id,
            entry_id: this.data.entry_id,
          },
          method: "DELETE",
        });
        if (res.data.data.status == "success") {
          this.setData({ is_collected: false });
          Toast({ message: "取消收藏成功！", position: "bottom" });
        } else {
          Toast({ message: "取消收藏失败！", position: "bottom" });
        }
      } catch (err) {
        console.log("error in 'entryDetail.js:191'");
        console.log(err);
        Toast({ message: "取消收藏失败！", position: "bottom" });
      }
    } else {
      try {
        const res = await request({
          url: "/collection/addentry",
          data: {
            user_id: this.data.user_id,
            entry_id: this.data.entry_id,
          },
          method: "PUT",
        });
        if (res.data.data.status == "collection_ok") {
          this.setData({ is_collected: true });
          Toast({ message: "收藏成功！", position: "bottom" });
        } else {
          Toast({ message: "收藏失败！", position: "bottom" });
        }
      } catch (err) {
        console.log("error in 'entryDetail.js:212'");
        console.log(err);
        Toast({ message: "收藏失败！", position: "bottom" });
      }
    }
  },
  onEditThisEntry() {
    const ent = this.data.entryDetail;
    navTo({
      page: "addEntry",
      args: `?ent=${ent}`,
    });
  },
});
