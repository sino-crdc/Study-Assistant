const getId=(params)=>{
    const Url = "https://amourestunart.asia/entry/getentryid";
    return new Promise((resolve,reject)=>{
        wx.request({
          ...params,
          url: Url,
          success:(result)=>{
              resolve(result);
          },
          fail:(err)=>{
              reject(err);
          }
        });
    })
};

const getEntryId = async (title)=>{
    try{
        const res = await getId({
            data: {
                title:title,
            },
            method:"GET",
        });
        console.log(res);
        return res.data.data.entry_id;
    }catch{
        console.log("net err");
        return 0;
    }
}

export default getEntryId;