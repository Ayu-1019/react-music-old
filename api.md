### 接口文档

#### 歌词接口
接口地址 : /lyric
调用例子 : /lyric?id=33894312

##### 评论接口
可选参数 : limit: 取出评论数量 , 默认为 20
接口地址 : /comment/music    
调用例子 : /comment/music?id=186016&limit=1 


##### 歌曲描述接口
接口地址 : /artist/desc
调用例子 : /artist/desc?id=5781  (薛之谦)

##### 搜索接口
接口地址 : /search 
调用例子 : /search?keywords=海阔天空

##### 搜索歌曲的相似歌曲
接口地址 : /simi/song
调用例子 : /simi/song?id=海阔天空

##### 获取热门歌手
可选参数 : limit: 取出数量 , 默认为 50
          offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
接口地址 : /top/artists
调用例子 : /top/artists?offset=0&limit=30

##### 电台 - 最热主播榜
可选参数 :imit : 返回数量 , 默认为 100 (不支持 offset)
接口地址 : /dj/toplist/popular
调用例子 : /dj/toplist/popular?limit=30
