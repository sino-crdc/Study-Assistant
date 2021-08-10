import Dialog from '../../components/vant/dialog/dialog';

Page({
    data: {
        type: "",
        voc: "",
        rawMD: "",
        backup: ""
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
        Dialog.confirm({
                message: '确认清空内容吗？',
            }).then(() => {
                this.setData({
                    rawMD: ""
                })
            }).catch(() => {})
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
    onConfirm(e){
        this.setData({
            rawMD: e.detail.value
        })
    },
    onUndo(){
        var backup = this.data.backup;
        Dialog.confirm({
            message: '确认还原内容吗？',
        }).then(()=>{
            this.setData({
                rawMD: backup
            })
        }).catch(()=>{})
    },
    onUpload(){
        Dialog.confirm({
            message: '确认上传吗？',
        }).then(()=>{

        }).catch(()=>{})
    }
});