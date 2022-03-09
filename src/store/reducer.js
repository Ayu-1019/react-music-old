import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/discover/children-pages/recommend/sotre';
import { reducer as playerReducer } from '../pages/player/store';
import { reducer as commentReducer } from '../components/comment-list/store';
import { reducer as artistReducer } from '../pages/discover/children-pages/artist/store';
import { reducer as djradioReducer } from '../pages/discover/children-pages/djradio/store';
import { reducer as searchReducer } from '../pages/search/store';
import { reducer as rankingReducer } from '../pages/discover/children-pages/ranking/store';
import { reducer as songsReducer } from '../pages/discover/children-pages/songs/store';
import { reducer as albumReducer } from '../pages/discover/children-pages/album/store';

const cReducer = combineReducers({
  recommend:recommendReducer,
  player:playerReducer,
  comment:commentReducer,
  artist:artistReducer,
  djradio:djradioReducer,
  search:searchReducer,
  ranking:rankingReducer,
  songs:songsReducer,
  albums:albumReducer
});

export default cReducer;
