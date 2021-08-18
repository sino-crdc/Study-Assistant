import {
	request
} from "../../request/request.js"
const app = getApp();

Page({
	data: {
		detail: {},
		attr: {},
		voc: "",
		netErr: false
	},
	async onLoad(options) {
		const _ts = this;
		_ts.setData({voc: options.voc});
		var voc_url = "/detail/" + _ts.data.voc + ".json";
		try {
			const res = await request({
				url: voc_url,
				header: {"content-type": "application/x-www-form-urlencoded"},
			});
			_ts.setTowxml(res);
		} catch　{
			_ts.setNetErr(true);
		}
	},
	onEdit(e) {
		var type = e.currentTarget.id;
		var voc = this.data.voc;
		const _ts = this;
		wx.navigateTo({
			url: '../vocedit/vocedit?type=' + type + '&voc=' + voc,
			success(res) {
				if (type=="title"){
					res.eventChannel.emit('onL', _ts.data.attr.title + "\n" + _ts.data.attr.chinese);
				}else{
				    res.eventChannel.emit('onL', _ts.data.attr[type]);
				}
			}
		})
	},
	setNetErr(err) {
		this.setData({
			netErr: err
		})
	},
	setTowxml(res) {
		const _ts = this;
		_ts.setData({
			attr: res.data.detail
		});
		const attr = _ts.data.attr;
		let title = attr.title;
		let content = app.towxml(attr.content, 'markdown',{events:{tap:(e)=>{_ts.nav()}}});
		let proof = app.towxml(attr.proof, 'markdown',{events:{tap:(e)=>{_ts.nav()}}});
		let remark = app.towxml(attr.remark, 'markdown',{events:{tap:(e)=>{_ts.nav()}}});
		let example = app.towxml(attr.example, 'markdown',{events:{tap:(e)=>{_ts.nav()}}});
		let source = attr.source;
		let chinese = attr.chinese;
		_ts.setData({
			"detail.title": title,
			"detail.content": content,
			"detail.proof": proof,
			"detail.remark": remark,
			"detail.example": example,
			"detail.source": source,
			"detail.chinese": chinese
		});
		console.log(_ts.data.attr);
	},
	nav:function(e){
		if (e.currentTarget.dataset.dataa.tag=='navigator'){
			var voc = e.currentTarget.dataset.data.attrs.href;
			wx.navigateTo({
			  url: '../vocdetail/vocdetail?voc=' + voc,
			})
		}
	}
});