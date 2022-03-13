import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';
import { formatDate } from '../../../../utils/data-format';

import { getSearchSongsAction } from '../../store/actionCreators';
import { getSongDetailAction } from '@/pages/player/store';
import { SearchWrap } from './styled'

const ZXYSearchSinger = memo(() => {

  const { searchSongs, searchContent } = useSelector(state => ({
    searchSongs: state.getIn(["search","searchSongs"]),
    searchContent: state.getIn(["search","searchContent"])
  }),shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchSongsAction(searchContent));
  },[dispatch,searchContent]);

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }

  return (
    <SearchWrap>
      <div className='search-content'>
        {
          searchSongs.slice(0,20).map((item,index) => {
            return (
              <div className='search-content-item' key={index}>
                <div className='songs-play' onClick={ e => playMusic(item) }>
                  <span className='sprite_table'> </span>
                </div>
                <div className='songs-name'>
                  <span>{item.name}</span>
                </div>
                <div className='songs-operation'>
                  <div className='songs-operation-wrap'>
                    <span className='sprite_icon2 addto'></span>
                    <span className='sprite_02 favor'></span>
                    <span className='sprite_table share'></span>
                    <span className='sprite_table down'></span>
                  </div>
                </div>
                <div className='songs-singer'><a href="/todo">{item.artists[0].name}</a></div>
                <div className='songs-album'><a href="/todo">《{item.album.name}》</a></div>        
                <div className='songs-duration'>{formatDate(item.duration,'mm:ss')}</div>
              </div>
            )
          })
        }
      </div>
    </SearchWrap>
  )
})

export default ZXYSearchSinger;