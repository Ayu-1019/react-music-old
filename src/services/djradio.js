import request from './request';

export function getHotDj(){
  return request({
    url:'/dj/toplist/popular'
  })
}