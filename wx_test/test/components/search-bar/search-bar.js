// ----Done?----

Component({
  properties: {
      //提示词
      placeholder: {
        type: String,
        value: 'Entrez votre terme de recherche...',
      },
      //输入的内容
      value: {
        type: String,
        value: ''
      }
  },

  data: {
      iconSize: 15
  },

  attached() {
    try {
      let _screenWidth = wx.getSystemInfoSync().screenWidth;
      this.setData({
        iconSize: Math.round(_screenWidth / 750 * 25)
      });
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
      //输入事件
      _searchInput: function(e) {
      // 输入的内容
      let _value = e.detail.value;
      this.setData({
        value: _value
      });
      this.triggerEvent('input', {
        value: _value
      });
    },
    //清除输入事件
    _searchClear: function(e) {
      this.setData({
        value: ''
      });
      this.triggerEvent('clear', {});
    },
    //搜索/取消
    _searchConfirm: function(e) {
      let _key = e.target.dataset.key;
      if (_key === 'back') {
        this.setData({
          value: ''
        });
      }
      this.triggerEvent('search', {
        key: _key,
        value: this.data.value
      });
    }
  }

})
