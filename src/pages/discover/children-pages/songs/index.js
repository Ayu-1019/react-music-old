import React, { memo } from 'react';

import { SongsWrapper } from './style';
import SongHeader from './child-components/song-header';
import SongList from './child-components/song-list'

export default memo(function ZXYSongs() {
  return (
    <SongsWrapper className='wrap-v2'>
      <SongHeader/>
      <SongList/>
    </SongsWrapper>
  )
});
