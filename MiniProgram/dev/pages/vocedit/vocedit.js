import Dialog from '../../components/vant/dialog/dialog';

Page({
    data: {
        type: "",
        voc: "",
        rawMD: "",
        backup: "",
        meta: "",
        flag: 1
    },
    onLoad(options) {
        const _ts = this;
        _ts.setData({
            type: options.type,
            voc: options.voc
        });
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on("onL", data=>{
            _ts.setData({
                rawMD: data,
                backup: data
            })
        })
    },
    onTip(e) {
        const _ts = this;
        var tip = e.currentTarget.dataset.tip;
        if (tip == "link") {
            tip = "[url](https://)";
        };
        var rawMD = _ts.data.rawMD + tip;
        _ts.setData({
            rawMD: rawMD
        })
        console.log(_ts.data.rawMD)
    },
    onClear() {
        this.setView(0);
        Dialog.confirm({
                message: '确认清空内容吗？'
            }).then(() => {
                this.setData({
                    rawMD: ""
                })
            }).catch(()=>{

            }).then(()=>{
                this.setView(1);
            }); 
    },
    onPreview(){
        const _ts = this;
        wx.navigateTo({
          url: '../vocpreview/vocpreview',
          success (res){
              res.eventChannel.emit('onPre', _ts.data.rawMD)
          }
        })
    },
    onChange(e){
        this.setData({
            rawMD: e.detail.value
        })
    },
    onUndo(){
        this.setview(0);
        var backup = this.data.backup;
        Dialog.confirm({
            message: '确认还原内容吗？',
        }).then(()=>{
            this.setData({
                rawMD: backup
            })
        }).catch(()=>{

        }).then(()=>{
            this.setview(1);
        }); 
    },
    onUpload(){
        this.setView(0);
        Dialog.confirm({
            message: '确认上传吗？',
        }).then(()=>{

        }).catch(()=>{

        }).then(()=>{
            this.setView(1);
        }); 
    },
    setView(flag){
        this.setData({
            flag: flag
        });
    }
});