# SA Miniprogram(Doing)

[TOC]



## assets

### icon

Tab栏图标

> 蓝色：#1296DB
>
> 灰色：#BCBCBC

### images

+ avatar.png——默认头像图片

+ logo.png——小程序logo

## components

+ split-line

  ```json
  @props:{
      color:#c4c4c4
  }
  @usedby:{}
  ```

+ entry-item

  ```json
  @args:{
      title,    //entry标题
      flag,     //是否显示checkbox
      //desc,   //Todo
  }
  @usedby:{
      
  }
  ```

+ vant

  | components | used by | theme |
  | ---------- | ------- | ----- |
  | button     |         |       |
  | cell       |         |       |
  | cell-group |         |       |
  | checkbox   |         |       |
  | empty      |         |       |
  | dialog     |         |       |
  | grid       |         |       |
  | grid-item  |         |       |
  | icon       |         |       |
  | loading    |         |       |
  | popup      |         |       |
  | skeleton   |         |       |
  | toast      |         |       |
  | transition |         |       |

## pages

### collection

```json
@request:[
    {
        url:'/collection/sync',
        data: ['user_id'],
        method:'POST',
    },
    {
        url:'/collection/submit',
        data:['user_id','collection'],
        method:'POST',
    },
]
@global:{
    set:['userCollection','need_submit'],
    get:['user_id','userCollection','need_submit']
}
@usejs:['navTo','request','pageStates']
@usecomponents:[]
@navigator:[]
```

### searchEntry

```json
@request:[
    {
        url:'/entrysearch',
        data:['keyword'],
        method:'GET',
    }
]
@usejs:['request','navTO','pageStates']
@usecomponents:['van-search','van-empty','van-skeleton','entry-item']
@navigator:[
    {
        page:'entryDetail',
        args:['entry']
    }
]
```

### profile

```json
@global:{
    set:[''],
    get:['isLogin','userinfo']
}
@navigator:[
    {page:'login'},
    {page:'about'},
    {page:'collection'},
    //{page:'myEdit'},    //Todo
]
@usejs:['Toast','Dialog','navTo']
@usecomponents:['van-icon','van-toast','van-dialog']
```

#### login

```json
@request:[
    {
        url:'/login',
        data:['code','userinfo']
        method:"POST"
    }
]
@global:{
    set:['userinfo','user_id','isLogin'],
    get:[]
}
@navigator:[{page:'index'}]
@usejs:['navTo','login','request','convertUserInfo']
```

#### about

```json
```

### index

```json
@navigator:[{
    page:'searchEntry',
    args:'keyword'
}]
@usejs:['navTo']
@usecomponents:['van-search']
```

### entryDetail

```json
@request:[
    {
        url:'/entrydetail',
        data:['entry_id'],
        method:'POST',
    }
]
@global:{
    set:[],
    get:['isLogin']
}
@navigator:[{page:'editEntry',args:['type','entry_id']}]
@usejs:['request','Toast','navTo','pageStates']
@usecomponents:['towxml','split','van-empty','van-icon','van-toast']
```

