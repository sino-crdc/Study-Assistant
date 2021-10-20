import Dialog from '../../components/vant/dialog/dialog';
import { request } from '../../utils/request';
import Toast from '../../components/vant/toast/toast';
import { navTo } from '../../utils/common';


Page({
    data: {
        type: '',
        entry_id: '',
        rawMD: '',
        backup: '',
        flag: 1
    },
    onLoad(options) {
        const _ts = this;
        _ts.setData({
            type: options.type,
            voc: options.voc
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
    async onUP(){
        var {type, entry_id, rawMD} = this.data;
        try {
            const res = await request({
                url: '/vocedit',
                method: 'POST',
                data: {
                    'type': type,
                    'entry_id': entry_id,
                    'rawMD': rawMD,
                    'user_id': wx.getStorageSync('user_id'),
                },
            });
            console.log('uploading');
            if (res && res.data.status=='okk'){
                Toast.success('提交成功！');
                wx.navigateBack({
                  delta: -1
                })
            } else {console.log('err'), Toast.fail('提交失败！')}
        } catch {
            console.log('err');
            Toast.fail('提交失败！');
        };
    },

});