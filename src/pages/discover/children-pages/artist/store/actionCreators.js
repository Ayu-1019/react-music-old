import * as actionTypes from './constants';

import { 
  getHotSinger
} from '@/services/artist';

const changeHotSinger = (res) => ({
  type:actionTypes.CHANGE_HOT_SINGER,
  hotSinger:res
})

export const getHotSingerAction = () => {
  return dispatch => {
    getHotSinger().then(res => {
      dispatch(changeHotSinger(res.artists));
    })
  }
}
