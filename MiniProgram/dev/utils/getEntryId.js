const getId=(params)=>{
    const Url = "https://amourestunart.asia/getEntryId";
    return new Promise((resolve,reject)=>{
        wx.request({
          ...params,
          url: Url,
          success:(result)=>{
              resolve(result.data.data.entry_id);
          },
          fail:(err)=>{
              reject(err);
          }
        });
    })
};

const getEntryId = async (title)=>{
    try{
        const res = getId(title);
        return res;
    }catch{
        console.log("net err");
        return 0;
    }
}

export default getEntryId;