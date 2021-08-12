import {
  request
} from "../../request/request.js";

Page({
  data: {
    keyword: "",
    resultsList: [],
    loading: false,
    netErr: false,
    schErr: false,
  },
  onChange(e) {
    this.setData({
      keyword: e.detail.value,
    });
  },
  onSearch() {
    var keyword = this.data.keyword;
    this.search(keyword);
  },
  onClick() {
    this.onSearch();
  },
  onLoad(options) {
    var keyword = options.key;
    this.setData({
      keyword,
    });
    this.search(keyword);
  },

  search(keyword) {
    console.log("sch");
    this.setData({
      loading: true,
    });
    request({
        url: "/search",
        //  data: {"keyword": keyword}
      })
      .then(
        (res) => {
          this.setData({
            resultList: res.data.data.resultList,
          });
          this.setData({
            netErr: false,
            schErr: false
          });
        },
        () => {
          console.log("err");
          this.setData({
            netErr: true,
          });
        }
      )
      .then(() => {
        this.setData({
          loading: false,
        });
        if (!this.data.resultList && !netErr) {
          this.setData({
            schErr: true,
          });
        }
      });
  },

  //跳转详情页面
  onDetail(e) {
    var voc = e.currentTarget.dataset.voc;
    console.log(e);
    wx.navigateTo({
      url: "../vocdetail/vocdetail?voc=" + voc,
    });
  },
});