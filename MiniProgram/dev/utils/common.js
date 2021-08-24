import pages from './config';

const ifExistUserId = () => {
  if (!wx.getStorageSync('user_id')) {
    return false;
  } else {
    return true;
  }
};

//ToDo
const navTo = (page, params, success_callback, fail_callback) => {
  if (page != 'index' && page != 'profile'){
    wx.navigateTo({
      url: pages[page] + params,
      success(res){
        if (typeof(success_callback)==='function'){
          success_callback(res)
        }
      },
      fail(err){
        if (typeof(fail_callback)==='function'){
          fail_callback(err)
        }
      }
    });
  } else {
    wx.switchTab({
      url: pages[page] + params,
      success(res){
        if (typeof(success_callback)==='function'){
          success_callback(res)
        }
      },
      fail(err){
        if (typeof(fail_callback)==='function'){
          fail_callback(err)
        }
      }
    })
  };
  
    
}

export { ifExistUserId, navTo }
