import React, { memo, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getSongList } from '../../store/actionCreators';

import { SongListWrapper } from './styled';
import ZXYSongsCover from '@/components/songs-cover';

const SongList = memo(() => {

  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(["songs", "categorySongs"])
  }),shallowEqual)
  console.log(categorySongs);
  const songList = categorySongs || [];
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongList());
  },[dispatch])

  return (
    <SongListWrapper>
      <div className='list-wrap'>
      {
        songList.map(item => {
          return <ZXYSongsCover info={item} right='30px'/>
        })
      }
      </div>
    </SongListWrapper>
  )
})

export default SongList;