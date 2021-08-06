const app = getApp();

Page({
  data: {
    detail: {},
	detail_URL:"https://zzzsy.top/wxp_test/",
    voc:"test"
  },
  onLoad: function () {
		const _ts = this;
		const URL = _ts.data.detail_URL + _ts.data.voc + ".json";
		app.getText(URL,res => {
			let obj = app.towxml(res.data.detail.title,'markdown');
			_ts.setData({
				detail:obj
			});
		});
		
	}
});