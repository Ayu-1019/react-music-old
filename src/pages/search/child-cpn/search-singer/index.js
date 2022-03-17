import React, { memo,useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';

import { getSizeImage } from '../../../../utils/data-format';
import { getSearchSingersAction } from '../../store/actionCreators';

import { SingerWrap } from './styled'

const ZXYSearchSongs = memo(() => {

  const { searchSingers,searchContent } = useSelector(state => ({
    searchSingers: state.getIn(["search","searchSingers"]),
    searchContent: state.getIn(["search","searchContent"])
  }),shallowEqual);
  console.log(searchSingers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchSingersAction(searchContent));
    
  },[dispatch,searchContent])

  const highLight = (keyword) => {
    searchSingers.forEach((value,index) => {
      const _list = value.name.split(keyword)
      if (_list.length !== 1) {
        value.name= (
          <>
          {_list[0]}
          <span style={{color: '#0c73c2'}}>{keyword}</span>
          {_list[1]}
          </>
        )
      }
    })
  }
  highLight(searchContent);
  return (
    <SingerWrap>
      {
        searchSingers.map((item,index) => {
          return (
            <div className='singer-item' key={index}>
              <div>
                <img src={getSizeImage(item.img1v1Url,130)} alt="" />
              </div>
              <div className='singer-item-info'>
                <p>{item.name}</p>
                <span><i className='sprite_icon2'></i></span>
              </div>
            </div>
          )
        })
      }
    </SingerWrap>
  )
})

export default ZXYSearchSongs;