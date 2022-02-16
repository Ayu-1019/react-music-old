import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/discover/children-pages/recommend/sotre';
import { reducer as playerReducer } from '../pages/player/store';
import { reducer as commentReducer } from '../components/comment-list/store';

const cReducer = combineReducers({
  recommend:recommendReducer,
  player:playerReducer,
  comment:commentReducer
});

export default cReducer;
