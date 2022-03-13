import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';
import { formatDate, getCount } from '../../../../utils/data-format';

import { getSearchVideoAction } from '../../store/actionCreators';

import { VideoWrap } from './styled'

const ZXYSearchVideo = memo((props) => {

  const { searchContent,searchVideos } = useSelector(state => ({
    searchContent: state.getIn(["search","searchContent"]),
    searchVideos: state.getIn(["search","searchVideos"])
  }),shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchVideoAction(searchContent))
  },[dispatch,searchContent])

  return (
    <VideoWrap>
      {
        searchVideos.map(item => {
          return (
            <div className='video-item' key={item.vid}>
              <div className='item-top'>
                <img src={item.coverUrl} alt="" />
                <div className='duration'>{formatDate(item.durationms,'mm:ss')}</div>
                <div className='playCount'>
                  <span className='sprite_icon3'></span>
                  {getCount(item.playTime)}
                </div>
              </div>
              <div className='item-title'>
                <span className={item.type? 'false': 'mv-icon'}></span>
                {item.title}
              </div>
              <div className='item-author'>
                {item.creator[0].userName}
              </div>
            </div>
          )
        })
      }
    </VideoWrap>
  )
})

export default ZXYSearchVideo;