import Toast from "../../components/vant/toast/toast";
import { navTo, convertDetail } from "../../utils/common";
import Dialog from "../../components/vant/dialog/dialog";
import { request } from "../../utils/request";

const app = getApp();

Page({
  data: {
    detail: [],
    llist: {
      title: "",
      chinese: "",
      content: "",
      proof: "",
      remark: "",
      example: "",
      source: "",
    },
    show: {
      title: true,
      chinese: false,
      content: false,
      proof: false,
      remark: false,
      example: false,
      source: true,
    },
  },
  async onLoad() {
    const _ts = this;
    const eventChannel = await this.getOpenerEventChannel();
    await eventChannel.on("onM", (data) => {
      const lllist = JSON.parse(data);
      console.log("jhjhj\n", lllist);
      const entry_id = lllist.id;
      console.log("hhhid\n", entry_id);
      const llist = convertDetail(lllist);
      console.log("dfghjk\n", llist);
      _ts.setData({
        llist: llist,
        entry_id,
      });
      _ts.setTowxml();
    });
  },
  onShow() {
    this.setTowxml();
  },
  isShow: function (e) {
    var type = e.currentTarget.id;
    this.setData({
      [`show.${type}`]: !this.data.show[type],
    });
  },
  //*Done
  onEdit(e) {
    var type = e.currentTarget.id;
    const _ts = this;
    const success_callback = (res) => {
      res.eventChannel.emit("onL", _ts.data.llist[type]);
    };
    navTo(
      {
        page: "editEntry",
        args: `?type=${type}&add=true`,
      },
      success_callback
    );
  },
  onUp() {
    const okk = this.onTest();
    if (okk) {
      Dialog.confirm({
        message: "确认上传吗？",
      })
        .then(() => {
          this.onUpp();
        })
        .catch((err) => {
          console.log("err in upadte.js:81", err);
          Toast({ message: "更新词条失败！", position: "bottom" });
        });
    }
  },
  async onUpp() {
    const entry = this.data.llist;
    const entry_id = this.data.entry_id;
    try {
      var res = await request({
        url: "/entry/updateentry",
        data: {
          entry_id: entry_id,
          entry: entry,
          user_id: wx.getStorageSync("user_id"),
        },
        method: "POST",
      });
    } catch (err) {
      console.log("err in upadte.js:100", err);
      Toast({ message: "更新词条失败！", position: "bottom" });
    }
    console.log(res);
    if (res.data.data && res.data.data.status == "success") {
      Toast({ message: "更新词条成功！", position: "bottom" });
      wx.navigateBack({
        delta: 1,
      });
    } else {
      Toast({ message: "更新词条失败！", position: "bottom" });
    }
  },
  onTest() {
    if (
      this.data.llist.title.trim() &&
      this.data.llist.content.trim() &&
      this.data.llist.source.trim()
    ) {
      return true;
    } else {
      Toast({ message: "有必填项未填！", position: "bottom" });
      return false;
    }
  },
  //?Doing
  setTowxml() {
    // const pageState = pageStates(this);
    const { theme } = wx.getSystemInfoSync();
    const detail = this.data.llist;
    let title = detail.title;
    let content = app.towxml(detail.content, "markdown", {
      theme: theme,
    });
    let proof = app.towxml(detail.proof, "markdown", {
      theme: theme,
    });
    let remark = app.towxml(detail.remark, "markdown", {
      theme: theme,
    });
    let example = app.towxml(detail.example, "markdown", {
      theme: theme,
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
    // pageState.finish();
  },
});
