import * as actionTypes from './constants';

import { 
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
} from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type:actionTypes.CHANGE_TOP_BANNERS,
  topBanners:res.banners
})

const changeHotRecommendAction = (res) => ({
  type:actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends:res.result
})

const changeNewAlbumAction = (res) => ({
  type:actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums:res.albums
})

const changeUpRanking = (res) => ({
  type:actionTypes.CHANGE_UP_RANKING,
  upRanking:res.playlist
})

const changeHotRanking = (res) => ({
  type:actionTypes.CHANGE_HOT_RANKING,
  hotRanking:res.playlist
})

const changeNewRanking = (res) => ({
  type:actionTypes.CHANGE_NEW_RANKING,
  newRanking:res.playlist
})

const changeOriginRanking = (res) => ({
  type:actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking:res.playlist
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch(idx) {
        case 0:
          dispatch(changeNewRanking(res));
          break;
        case 1:
          dispatch(changeHotRanking(res));
          break;
        case 2:
          dispatch(changeOriginRanking(res));
          break;
        case 3:
          dispatch(changeUpRanking(res));
          break;
        default:
      }
    })
  }
}
