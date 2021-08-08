const app = getApp();

Page({
  data: {
    detail: {},
	attr:{},
	detail_URL:"https://zzzsyyy.github.io/wxp_test/",
    voc:"test"
  },
  onShow(){
		const _ts = this;
		var URL = _ts.data.detail_URL + _ts.data.voc + ".json";
		app.getText(URL,res => {
			_ts.setData({
				attr: res.data.detail
			});
			const attr = _ts.data.attr;
			let title = app.towxml(attr.title,'markdown');
			let content = app.towxml(attr.content,'markdown');
			let preuve = app.towxml(attr.preuve,'markdown');
			let remarque = app.towxml(attr.remarque,'markdown');
			let exemple = app.towxml(attr.exemple,'markdown');
			let source = app.towxml(attr.source,'markdown');
			let chinese = app.towxml(attr.chinese,'markdown');
			_ts.setData({
				"detail.title": title,
				"detail.content": content,
				"detail.preuve": preuve,
				"detail.remarque": remarque,
				"detail.exemple": exemple,
				"detail.source": source,
				"detail.chinese": chinese				
			});
			console.log(_ts.data.attr);
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