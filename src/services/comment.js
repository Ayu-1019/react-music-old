import request from './request';

export function getSongsComment(id){
  return request({
    url:'/comment/music',
    params:{
      id
    }
  })
}