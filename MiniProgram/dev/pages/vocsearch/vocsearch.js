import { request } from "../../request/request.js"

Page({
  data: {
    value:'',
    resultList:[]
  },
  onChange(e) {
    this.setData({
      value: e.detail
    });
  },
  onSearch() {
    request({url: 'https://api.zzzsy.top/xxx/xxx',
             data: this.value
    })
    .then(result =>{
      this.setData({
        resultList:result.message.resultList
      })
    });
  },
  onClick() {
    request({url: 'https://api.zzzsy.top/xxx/xxx',
             data: this.value
    })
    .then(result =>{
      this.setData({
        resultList: result.message.resultList
      })
    });
  },
  onLoad: function(options) {
    console.log(options);
    this.setData({
      value: options.keyword
    })
  },
});