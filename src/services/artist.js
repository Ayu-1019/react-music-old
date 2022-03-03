import request from './request';

export function getHotSinger(){
  return request({
    url:'/top/artists'
  })
}