import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';
import { getSizeImage } from '../../../../utils/data-format';

import { getSearchSounddjAction } from '../../store/actionCreators';

import { SoundDjWrap, InfoGender } from './styled';

const ZXYSearchSounddj = memo((props) => {

  const { searchContent,searchSounddjs } = useSelector(state => ({
    searchContent: state.getIn(["search","searchContent"]),
    searchSounddjs: state.getIn(["search","searchSounddjs"])
  }),shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchSounddjAction(searchContent))
  },[dispatch,searchContent])

  return (
    <SoundDjWrap>
      <div className='sounddj-title'>声音主播</div>
      <div className='sounddj-content'>
        {
          searchSounddjs.slice(0,10).map(item => {
            return (
              <div className='content-item' key={item.id}>
                <div className='item-image'>
                  <img src={getSizeImage(item.picUrl,150)} alt="" />
                </div>
                <div className='item-info'>
                  <div className='info-name'>{item.name}</div>
                  <div className='info-author'>
                    by <span>{item.dj.nickname}</span>
                    <InfoGender className='sprite_icon2' gender={item.dj.gender}></InfoGender>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </SoundDjWrap>
  )
})

export default ZXYSearchSounddj;