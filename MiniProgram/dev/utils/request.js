export const request=(params)=>{
    const baseUrl = "https://zzzsyyy.github.io/wxp_test";
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