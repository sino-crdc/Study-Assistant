const app = getApp();

Page({
  data: {
    detail: {},
	detail_URL:"https://api.zzzsy.top/detail/",
    voc:""
  },
  onShow(){
		const _ts = this;
		var URL = _ts.data.detail_URL + _ts.data.voc + ".json";
		app.getText(URL,res => {
			let obj = app.towxml(res.data.detail,'markdown');
			_ts.setData({
				detail:obj
			});
		});
		
	},
  onEdit(e){
	  var type = e.currentTarget.id;
      var voc = this.data.voc;
	  wx.navigateTo({
		url: '../vocedit/vocedit?type='+type+'&voc='+voc,
	  })
  }
});