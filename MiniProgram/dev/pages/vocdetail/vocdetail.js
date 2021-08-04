const app = getApp();

Page({
  data: {
    detail: {}
  },
  onLoad: function () {
		const _ts = this;
		app.getText('https://zzzsy.top/wxp_test/test.md',res => {
			let obj = app.towxml(res.data,'markdown');
			_ts.setData({
				detail:obj
			});
		});
		
	}
});