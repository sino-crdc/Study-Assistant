import { request } from '../../utils/request';
import { request_test } from '../../utils/request';
import Toast from '../../components/vant/toast/toast';
import { navTo } from "../../utils/common";
const app = getApp();

Page({
  data: {
    detail: {},
    vocdata: {},
    voc_id: 0,
    netErr: false,
    show: {
      content: true,
      proof: true,
      remark: true,
      example: true,
      source: true,
    },
    no_voc: false,
    is_fav: false,
  },
  onLoad(options) {
    if (options.no_voc == 1) {
      this.setData({
        no_voc: true,
      });
    } else {
      this.setData({
        no_voc: false,
      });
      this.showDetail(options.voc_id);
    }
  },
  showDetail: async function (voc_id) {
    const _ts = this;
    _ts.setData({
      voc_id: voc_id,
    });
    try {
      const res = await request_test({
        url: 'https://result.eolinker.com/4jVrjsne9fb6b02452d40cb5ed91884ddc6a323acfe39f7?uri=/vocdetail',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        // data: {
        //   voc_id: voc_id,
        // },
      });
      _ts.setData({
        vocdata: res.data.data.vocdata,
      });
      console.log('attr');
      console.log(_ts.data.vocdata);
      _ts.setTowxml();
    } catch {
      _ts.setNetErr(true);
    }
  },
  
  onEdit(e) {
    var type = e.currentTarget.id;
    var voc_id = this.data.voc_id;
    const _ts = this;
    const success_callback = (res) => {
      if (type == 'title') {
        res.eventChannel.emit(
          'onL',
          _ts.data.vocdata.detail.title + '\n' + _ts.data.vocdata.detail.chinese
        );
      } else {
        res.eventChannel.emit('onL', _ts.data.vocdata.detail[type]);
      }
    };
    navTo({
      page: 'editEntry',
      args: `?type=${type}&voc_id=${voc_id}`
    },success_callback
    );
  },
  setNetErr(err) {
    this.setData({
      netErr: err,
    });
  },
  setTowxml() {
    const {theme} = wx.getSystemInfoSync();
    const _ts = this;
    const attr = _ts.data.vocdata.detail;
    let title = attr.title;
    let content = app.towxml(attr.content, 'markdown', {
      theme: theme,
      events: {
        tap: (e) => {
          _ts.nav(e);
        },
      },
    });
    let proof = app.towxml(attr.proof, 'markdown', {
      theme: theme,
      events: {
        tap: (e) => {
          _ts.nav(e);
        },
      },
    });
    let remark = app.towxml(attr.remark, 'markdown', {
      theme: theme,
      events: {
        tap: (e) => {
          _ts.nav(e);
        },
      },
    });
    let example = app.towxml(attr.example, 'markdown', {
      theme: theme,
      events: {
        tap: (e) => {
          _ts.nav(e);
        },
      },
    });
    let source = attr.source;
    let chinese = attr.chinese;
    _ts.setData({
      'detail.title': title,
      'detail.content': content,
      'detail.proof': proof,
      'detail.remark': remark,
      'detail.example': example,
      'detail.source': source,
      'detail.chinese': chinese
    });
  },
  nav: async function (e) {
    console.log(e);
    if (e.currentTarget.dataset.data.tag == 'navigator') {
      var voc = e.currentTarget.dataset.data.attrs.href;
      const voc_id = await request({
        url: '/voc_id',
        data: {
          voc: voc,
        },
      });
      if (res.data.data.code == 200) {
        wx.navigateTo({
          url: '../vocdetail/vocdetail?no_voc=0&voc_id=' + voc_id,
        });
      } else {
        wx.navigateTo({
          url: '../vocdetail/vocdetail?no_voc=1',
        });
      }
    }
  },
  sh: function (e) {
    var t = e.currentTarget.id;
    var s = this.data.show[t];
    var r = 'show.' + t;
    this.setData({
      [r]: !s,
    });
  },
  async onFavThisVoc(){
    const user_id = wx.getStorageSync('user_id');
    try {
      const res = await request({
        url: '/fav',
        data: {
          'user_id': user_id,
          'voc_id': voc_id,
        },
      });
      if (res.data.data.code==200){
        this.setData({is_fav: !this.data.is_fav});
        Toast({messgae: '收藏成功！', position: 'bottom'});
      } else if (res.dataa.data.code==201){
        Toast({message: '取消收藏成功！', position: 'bottom'});
      } else {
        this.data.is_fav==true?Toast({message: '取消收藏失败', position: 'bottom'}):Toast({message: '收藏失败', position: 'bottom'});
      };
    } catch {
      this.data.is_fav==true?Toast({message: '取消收藏失败', position: 'bottom'}):Toast({message: '收藏失败', position: 'bottom'});
    };
    //  this.setData({is_fav: !this.data.is_fav});
  },
  onEditThisVoc(){
    
  }
});
