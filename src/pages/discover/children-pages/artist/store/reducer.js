import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  // 热门歌手
  hotSinger:[]
})

function reducer(state = defaultState,action) {
  switch(action.type){
    case actionTypes.CHANGE_HOT_SINGER:
      return state.set("hotSinger",action.hotSinger);
    default:
      return state;
  }
}

export default reducer;
