import * as actionTypes from './constants';

import { 
  getHotSinger,
  getArtistList
} from '@/services/artist';

const changeHotSinger = (res) => ({
  type:actionTypes.CHANGE_HOT_SINGER,
  hotSinger:res
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
