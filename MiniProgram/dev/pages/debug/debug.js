import {navTo} from '../../utils/common';

Page({
  data: {
    args: '',
    debugList: [
      'onIndex',
      'onprofile',
      'onAbout',
      'onLogin',
      'onCollection',
      'onEditEntry',
      'onPreviewEdit',
      'onEntryDetail',
      'onSearchEntry',
      'onMyEdit',
    ]
  },
  onIn(e){
    this.setData({
      args: e.detail.value
    })
  },
  onIndex(){
    navTo({page: 'index', args: this.data.args})
  },
  onProfile(){
    navTo({page: 'profile', args: this.data.args})
  },
  onAbout(){
    navTo({page: 'about', args: this.data.args})
  },
  onLogin(){
    navTo({page: 'login', args: this.data.args})
  },
  onCollection(){
    navTo({page: 'collection', args: this.data.args})
  },
  onEditEntry(){
    navTo({page: 'editEntyr', args: this.data.args})
  },
  onPreviewEdit(){
    navTo({page: 'previewEdit', args: this.data.args})
  },
  onEntryDetail(){
    navTo({page: 'entryEntry', args: this.data.args})
  },
  onSearchEntry(){
    navTo({page: 'searchEntry',args: this.data.args})
  },
  onMyEdit(){
    navTo({page: 'myEdit', args: this.data.args})
  }
});