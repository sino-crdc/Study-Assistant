import { request } from '../../utils/request';
import { navTo } from "../../utils/common";

Page({
  data: {
    keyword: '',
    resultList: [],
    loading: false,
    netErr: false,
    schErr: false,
    dk: 'light',
  },

  onChange(e) {
    this.setData({keyword: e.detail.value});
  },

  onSearch() {
    this.search(this.data.keyword);
  },
  onClick() {
    this.onSearch();
  },

  onLoad(options) {
    var keyword = options.key;
    const dk = wx.getSystemInfoSync().theme;
    this.setData({keyword,dk});
    this.search(keyword);
  },

  async search(keyword) {
    const _ts = this;
    _ts.setData({loading: true, netErr: false, schErr: false, resultList: []});
    console.log('sch');
    try {
      const res = await request({
        url: '/search',
        // data: {'keyword': keyword}
      });
      console.log('res');
      console.log(res);
      _ts.setData({
        resultList: res.data.data.resultList,
        netErr: false,
        schErr:  false,
      });
    } catch {
      console.log('err');
      _ts.setData({netErr: true});
    };
    console.log(_ts.data.resultList);
    _ts.setData({loading: false});
    if (_ts.data.resultList.length==0 && !_ts.data.netErr) {
        _ts.setData({schErr: true});
    }
  },

  //跳转详情页面
  onDetail(e) {
    var voc_id = e.currentTarget.dataset.voc_id;
    console.log(e);
    navTo('entryDetail', `?voc_id=${voc_id}`)
    // wx.navigateTo({
    //   url: '../vocdetail/vocdetail?voc_id=' + voc_id,
    // });
  },
});