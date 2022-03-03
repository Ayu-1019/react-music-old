import * as actionTypes from './constants';

import { 
  getSearchSong,
  getSearchSinger,
  getSearchAlbum,
  getSearchVideo,
  getSearchLyric,
  getSearchPlaylist,
  getSearchSounddj,
  getSearchUser
} from '@/services/search';

const changeSearchSongs = (res) => ({
  type:actionTypes.CHANGE_SEARCH_SONGS,
  searchSongs:res
})

const changeSearchSingers = (res) => ({
  type:actionTypes.CHANGE_SEARCH_SINGERS,
  searchSingers:res
})

const changeSearchContent = (keywords) => ({
  type:actionTypes.CHANGE_SEARCH_CONTENT,
  searchContent:keywords
})

export const getSearchContentAction = (keywords) => {
  return dispatch => {
    dispatch(changeSearchContent(keywords));
  }
}

export const getSearchSongsAction = (keywords) => {
  return dispatch => {
    getSearchSong(keywords).then(res => {
      // console.log(res);
      dispatch(changeSearchSongs(res.result.songs));
    })
  }
}

export const getSearchSingersAction = (keywords) => {
  return dispatch => {
    getSearchSinger(keywords).then(res => {
      // console.log(res);
      dispatch(changeSearchSingers(res.result.artists));
    })
  }
}
