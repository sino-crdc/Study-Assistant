import Toast from "../../components/vant/toast/toast";
import { navTo } from "../../utils/common";
import Dialog from '../../components/vant/dialog/dialog';
import { request } from "../../utils/request";

Page({
  data: {
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
      chinese: true,
      content: true,
      proof: true,
      remark: true,
      example: true,
      source: true,
    },
  },
  onLoad() {},
  isShow: function (e) {
    var t = e.currentTarget.id;
    var s = this.data.show[t];
    var r = "show." + t;
    this.setData({
      [r]: !s,
    });
  },
  //!Doing
  onEdit(e) {
    var type = e.currentTarget.id;
    const _ts = this;
    const success_callback = (res) => {
      if (type == "title") {
        res.eventChannel.emit(
          "onL",
          _ts.data.llist.title + "\n" + _ts.data.llist.chinese
        );
      } else {
        res.eventChannel.emit("onL", _ts.data.llist[type]);
      }
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
  }
});
