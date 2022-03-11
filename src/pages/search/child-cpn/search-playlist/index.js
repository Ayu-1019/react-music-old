import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';
import { getCount, getSizeImage } from '../../../../utils/data-format';

import { getSearchPlaylistAction } from '../../store/actionCreators';

import { PlaylistWrap } from './styled';

const ZXYSearchPlaylist = memo((props) => {
  
  const { searchContent,searchPlaylists } = useSelector(state => ({
    searchContent: state.getIn(["search","searchContent"]),
    searchPlaylists: state.getIn(["search","searchPlaylists"])
  }),shallowEqual);
  console.log(searchPlaylists);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchPlaylistAction(searchContent))
  },[dispatch,searchContent])

  return (
    <PlaylistWrap>
      {
        searchPlaylists.slice(0,20).map(item => {
          return (
            <div className='playlist-item'>
              <div className='item-play-icon sprite_table'></div>
              <div className='item-image'>
                <img src={getSizeImage(item.coverImgUrl,50)} alt="" />  
              </div>
              <div className='item-name'>
                {item.name}
                <div className='item-operate'>123</div>
              </div>
              <div className='item-number'>{item.trackCount}首</div>
              <div className='item-author'>by <span>{item.creator.nickname}</span></div>
              <div className='item-star'>收藏：{getCount(item.bookCount)}</div>
              <div className='item-playcount'>收听：{getCount(item.playCount)}</div>
            </div>
          )
        })
      }
    </PlaylistWrap>
  )
})

export default ZXYSearchPlaylist;