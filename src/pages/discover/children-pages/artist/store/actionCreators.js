import * as actionTypes from './constants';

import { 
  getHotSinger,
  getArtistList
} from '@/services/artist';

const changeHotSinger = (res) => ({
  type:actionTypes.CHANGE_HOT_SINGER,
  hotSinger:res
})

const changeArtistList = (res) => ({
  type:actionTypes.CHANGE_ARTIST_LIST,
  artistList:res
})

export const changeCurrentAreaAction = (area) => ({
  type:actionTypes.CHANGE_CURRENT_AREA,
  currentArea:area
})

export const changeCurrentTypeAction = (type) => ({
  type:actionTypes.CHANGE_CURRENT_TYPE,
  currentType:type
})

export const getHotSingerAction = () => {
  return dispatch => {
    getHotSinger().then(res => {
      dispatch(changeHotSinger(res.artists));
    })
  }
}

export const getArtistListAction = (area, type, alpha) => {
  return dispatch => {
    getArtistList(area, type, alpha).then(res => {
      console.log(res);
      dispatch(changeArtistList(res.artists))
    })
  }
}
