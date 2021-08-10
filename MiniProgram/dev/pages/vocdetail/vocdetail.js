const app = getApp();

Page({
  data: {
    detail: {},
	attr:{},
	detail_URL:"https://api.xxx.top/detail/",
    voc:""
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
			let proof = app.towxml(attr.proof,'markdown');
			let remark = app.towxml(attr.remark,'markdown');
			let exemple = app.towxml(attr.exemple,'markdown');
			let source = app.towxml(attr.source,'markdown');
			let chinese = app.towxml(attr.chinese,'markdown');
			_ts.setData({
				"detail.title": title,
				"detail.content": content,
				"detail.proof": proof,
				"detail.remark": remark,
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
	  const _ts = this;
	  wx.navigateTo({
		url: '../vocedit/vocedit?type='+type+'&voc='+voc,
		success (res){
			res.eventChannel.emit('onL', _ts.data.attr[type])
		}
	  })
  }
});