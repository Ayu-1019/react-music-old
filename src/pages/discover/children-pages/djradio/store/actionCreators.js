import * as actionTypes from './constants';

import { 
  getHotDj
} from '@/services/djradio';

const changeHotDj = (res) => ({
  type:actionTypes.CHANGE_HOT_DJ,
  hotDj:res
})

export const getHotDjAction = () => {
  return dispatch => {
    getHotDj().then(res => {
      dispatch(changeHotDj(res.data.list));
    })
  }
}
