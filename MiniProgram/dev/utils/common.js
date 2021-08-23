const ifExistUserId = () => {
  if (!wx.getStorageSync("user_id")) {
    return false;
  } else {
    return true;
  }
};



export { ifExistUserId}
