var ifExitUserId =  function(){
    if (!wx.getStorageSync('user_id')){
        return false;
    } else {
        return wx.getStorageSync('user_id');
    }
};

module.exports={
    ifExitUserId: ifExitUserId
}