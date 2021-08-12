import { request } from "../../request/request.js"

Page({
  data: {
    keyword:'',
    resultsList:[],
    loading: false
  },
  onChange(e) {
    this.setData({
      keyword: e.detail.value
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
    this.setData({keyword});
    this.search(keyword);
  },

  search(keyword) {
    this.setData({loading: true});  
    request({url: '/search',
             data: {"keyword": keyword}
    }).then(res =>{
      this.setData({
        resultList:res.data.resultList
      })
    }).then(()=>{
      this.loading=false
    });
  },
});