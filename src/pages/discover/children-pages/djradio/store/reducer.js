import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  // 热门主播
  hotDj:[]
})

function reducer(state = defaultState,action) {
  switch(action.type){
    case actionTypes.CHANGE_HOT_DJ:
      return state.set("hotDj",action.hotDj);
    default:
      return state;
  }
}

export default reducer;
