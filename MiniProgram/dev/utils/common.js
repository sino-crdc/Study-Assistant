import pages from './config';

const ifExistUserId = () => {
  if (!wx.getStorageSync('user_id')) {
    return false;
  } else {
    return true;
  }
};

const navTo = (params, success_callback, fail_callback) => {
  let page = params.page;
  let args = params.args || '';
  let s_callback = success_callback || null;
  let f_callback = fail_callback ||  null;
  if (page != 'index' && page != 'profile'){
    wx.navigateTo({
      url: pages[page] + args,
      success(res){
        if (typeof(s_callback)==='function'){
          s_callback(res)
        }
      },
      fail(err){
        if (typeof(f_callback)==='function'){
          f_callback(err)
        }
      }
    });
  } else {
    wx.switchTab({
      url: pages[page] + args,
      success(res){
        if (typeof(s_callback)==='function'){
          s_callback(res)
        }
      },
      fail(err){
        if (typeof(f_callback)==='function'){
          f_callback(err)
        }
      }
    })
  };
  
    
}

export { ifExistUserId, navTo }
