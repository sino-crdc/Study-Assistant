Component({
  behaviors: [],
  properties: {
    title: {
      type: String,
      value: ""
    },
    meta: {
      type: String,
      value: ""
    },
    checked: {
      type: Boolean,
      value: false
    },
    flag: {
      type: Boolean,
      value: false
    }
    
  },
  data: {
      
  },
  lifetimes: {
    created() {

    },
    attached() {

    },
    moved() {

    },
    detached() {

    },
  },
  methods: {
    onChange(e){
      this.setData({checked: e.detail})
    }
  },
});