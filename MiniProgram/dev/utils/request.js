export const request=(params)=>{
    const baseUrl = "https://amourestunart.asia";
    return new Promise((resolve,reject)=>{
        wx.request({
          ...params,
          url: baseUrl + params.url,
          success:(result)=>{
              resolve(result);
          },
          fail:(err)=>{
              reject(err);
          }
        });
    })
};
//Test
export const request_test = (params)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
          ...params,
          success: (res)=>{
              resolve(res);
          },
          fail:(err)=>{
              reject(err);
          }
        });
    })
}