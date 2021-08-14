import Dialog from '../../components/vant/dialog/dialog';
import {request} from '../../request/request';
import Toast from '../../components/vant/toast/toast';


Page({
    data: {
        type: "",
        voc: "",
        rawMD: "",
        backup: "",
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
        this.setView(0);
        var backup = this.data.backup;
        Dialog.confirm({
            message: '确认还原内容吗？',
        }).then(()=>{
            this.setData({
                rawMD: backup
            })
        }).catch(()=>{

        }).then(()=>{
            this.setView(1);
        }); 
    },
    onUpload(){
        this.setView(0);
        Dialog.confirm({
            message: '确认上传吗？',
        }).then(()=>{
            this.onUP();
        }).catch(()=>{

        }).then(()=>{
            this.setView(1);
        }); 
    },
    setView(flag){
        this.setData({
            flag: flag
        });
    },
    onUP(){
        var {type, voc, rawMD} = this.data;
        request({
            url: '/upload',
            method: "POST",
            data: {"type":type,"voc":voc,"rawMD":rawMD,"user_id":user_id}
        }).then((res)=>{
            if (res.data.status=="okk"){
                Toast("提交成功！");
                wx.navigateBack({
                  delta: -1
                })
            }else{Toast("提交失败！")}
        }, ()=>{Toast("提交失败！")})

    }
});