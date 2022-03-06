import request from './request';

export function getHotDj(){
  return request({
    url:'/dj/toplist/popular'
  })
}

// 顶部分类
export function getDjRadioCatelist() {
  return request({
    url: "/dj/catelist"
  })
}

// 优秀新电台
export function getNewDj(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

// 电台排行榜 最热
export function getDjRank(cateId, limit, offset) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}