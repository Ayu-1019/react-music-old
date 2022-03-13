import request from './request';

export function getSearchSong(keywords){
  return request({
    url:'/search',
    params:{
      type:1,
      keywords
    }
  })
}

export function getSearchSinger(keywords){
  return request({
    url:'/search',
    params:{
      type:100,
      keywords
    }
  })
}

export function getSearchAlbum(keywords){
  return request({
    url:'/search',
    params:{
      type:10,
      keywords
    }
  })
}

export function getSearchVideo(keywords){
  return request({
    url:'/search',
    params:{
      type:1014,
      keywords
    }
  })
}

export function getSearchLyric(keywords){
  return request({
    url:'/search',
    params:{
      type:1006,
      keywords
    }
  })
}


export function getSearchPlaylist(keywords){
  return request({
    url:'/search',
    params:{
      type:1000,
      keywords
    }
  })
}

export function getSearchSounddj(keywords){
  return request({
    url:'/search',
    params:{
      type:1009,
      keywords
    }
  })
}

export function getSearchUser(keywords){
  return request({
    url:'/search',
    params:{
      type:1002,
      keywords
    }
  })
}

export function getSearchUserPlaylistCount(uid){
  return request({
    url:'/user/detail',
    params:{
      uid
    }
  })
}