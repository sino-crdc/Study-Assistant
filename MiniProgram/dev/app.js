import { ifExistUserId } from './utils/common';

//app.js
App({
    globalData: {
        hasLogin: false,
        user_id: null
    },
    towxml:require('/utils/towxml/index'),
    onLaunch: function(options){
        if(ifExistUserId){
            this.globalData.hasLogin=true;
        }
    },
});
