import Toast from "../../components/vant/toast/toast";
import { navTo } from "../../utils/common";
import Dialog from '../../components/vant/dialog/dialog';
import { request } from "../../utils/request";

const app = getApp();

Page({
  data: {
    detail:[],
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
  onShow() {
    this.setTowxml()
  },
  isShow: function (e) {
    var type = e.currentTarget.id;
    this.setData({
      [`show.${type}`]: !this.data.show[type],
    });
  },
  //?Doing
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
    const okk=this.onTest();
    if (okk){
      Dialog.confirm({
        message: "确认上传吗？",
      }).then(() => {
          this.onUpp();
        }).catch((err) => {console.log(err)})
    }
  },
  async onUpp(){
    const new_entry = this.data.llist;
    try {
      var res = await request({
        url: "/entry/addentry",
        data: {
          new_entry:new_entry,
          user_id: wx.getStorageSync('user_id'),
        },
        method: "PUT",
      });
    }catch(err){
      console.log(err);
    }
    console.log(res)
    if (res.data.data.status=='success'){
      Toast({ message: "新建词条成功！", position: "bottom" });
      wx.navigateBack({
        delta:1,
      })
    }
  },
  onTest(){
    if (this.data.llist.title.trim()&&this.data.llist.content.trim()&&this.data.llist.source.trim()){
      return true
    }else{
      Toast({ message: "有必填项未填！", position: "bottom" });
      return false
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
