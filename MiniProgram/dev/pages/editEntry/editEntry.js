import Dialog from '../../components/vant/dialog/dialog';
import { request } from '../../utils/request';
import Toast from '../../components/vant/toast/toast';
import { navTo } from '../../utils/common';


Page({
    data: {
        type: '',
        add:false,
        entry_id: '',
        rawMD: '',
        backup: '',
        flag: 1
    },
    onLoad(options) {
        const _ts = this;
        _ts.setData({
            type: options.type,
            entry_id: options.entry_id,
            add: options.add,
        });
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on('onL', data=>{
            _ts.setData({
                rawMD: data,
                backup: data
            })
        })
    },
    onTip(e) {
        const _ts = this;
        var tip = e.currentTarget.dataset.tip;
        if (tip == 'link') {
            tip = '[url](https://)';
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
                    rawMD: ''
                })
            }).catch(()=>{

            }).then(()=>{
                this.setView(1);
            }); 
    },
    onPreview(){
        const _ts = this;
        const success_callback = (res) => {res.eventChannel.emit('onPre', _ts.data.rawMD)}
        navTo({page: 'previewEdit'}, success_callback);
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
    onOkk(){
        const type=this.data.type;
        let curPages =  getCurrentPages();
        let prevPage =curPages[curPages.length-2];
        prevPage.setData({
            [`llist.${type}`]:this.data.rawMD
        });
        wx.navigateBack({
            delta: 1
          })
    },
    onTest(){
        if (this.data.rawMD.trim()&&(this.data.type=="content"||this.data.type=="title"||this.data.type=="source")){
          return true
        }else{
          Toast({ message: "必填项为空！", position: "bottom" });
          return false
        }
      },
    onUpload(){
        this.setView(0);
        Dialog.confirm({
            message: '确认上传吗？',
        }).then(()=>{
            this.onTest();
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
    async onUP(){
        var {type, entry_id, rawMD} = this.data;
        try {
            const res = await request({
                url: '/entry/editentry',
                method: 'POST',
                data: {
                    'type': type,
                    'entry_id': entry_id,
                    'rawMD': rawMD,
                    'user_id': wx.getStorageSync('user_id'),
                },
            });
            console.log('uploading');
            console.log(res);
            if (res && res.data.data.status=='success'){
                Toast.success('提交成功！');
                wx.navigateBack({
                  delta: 1
                })
            } else {console.log('err'), Toast.fail('提交失败！')}
        } catch(err) {
            console.log('err');
            console.log(err);
            Toast.fail('提交失败！');
        };
    },

});