import * as actionTypes from './constants';

import { 
  getHotAlbums,
  getAllAlbums
} from '@/services/album';

const changeHotAlbums = (res) => ({
  type:actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums:res
})

export const getHotAlbumsAction = () => {
  return dispatch => {
    getHotAlbums().then(res => {
      dispatch(changeHotAlbums(res.albums))
    })
  }
}

