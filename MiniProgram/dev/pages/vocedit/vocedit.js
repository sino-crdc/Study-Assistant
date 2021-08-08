Page({
  data: {
      type: "",
      voc: ""
  },
  onLoad(options) {
      const _st = this;
      _st.setData({
          type: options.type,
          voc: options.voc
      })
  }
});