import { request } from "../../utils/request";
import { navTo } from "../../utils/common";
import pageStates from "../../utils/pageState";

Page({
  data: {
    keyword: "",
    resultList: [],
  },
  //搜索框内容改变
  onChange(e) {
    this.setData({ keyword: e.detail.value });
  },
  onClick() {
    this.search(this.data.keyword);
  },
  onLoad(options) {
    var keyword = options.keyword;
    const { theme } = wx.getSystemInfoSync();
    this.setData({ keyword, theme });
    this.search(keyword);
  },
  //搜索
  async search(keyword) {
    const pageState = pageStates(this);
    pageState.loading();
    try {
      const res = await request({
        url: "/entry/entrysearch",
        data: { keywords: keyword },
        method: "GET",
      });
      console.log(res);
      this.setData({
        resultList: res.data.data.result_list,
      });
      pageState.finish();
    } catch {
      pageState.error();
      console.log("neterr");
    }
    if (
      this.data.resultList.length == 0 &&
      this.data.pageState.state != "error"
    ) {
      console.log("search empty")
      pageState.empty();
    }
  },
  //跳转详情页面
  navToDetail(e) {
    var entry_id = e.currentTarget.dataset.entry_id;
    navTo({ page: "entryDetail", args: `?entry_id=${entry_id}` });
  },
});
