import React, { memo, useEffect } from 'react';

import { SongCategoryWrapper } from './styled';

import { getCategory } from '../../store/actionCreators';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const SongCategory = memo(() => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  },[dispatch])

  const { category } = useSelector(state => ({
    category:state.getIn(["songs", "category"]),
  }),shallowEqual)
  console.log(category);

  return (
    <SongCategoryWrapper>
      <div className='head-icon'>
        <i className='sprite_icon'></i>
      </div>
      <div className='list-head'>
        <div className='list-head-all'>全部分类</div>
      </div>
      <div className='list-content'>
        <div className='list-content-language'>
          <div className='language-left'>
            <span></span>
            {category[0].name}
          </div>
          <div className='language-right'>
            {
              category[0].subs.map((item,index) => {
                return (
                  <span>{item.name}</span>
                )
              })
            }
          </div>
        </div>
        <div className='list-content-style'>
          <div className='style-left'>
            <span></span>
            {category[1].name}
          </div>
          <div className='style-right'>
            {
              category[1].subs.map((item,index) => {
                return (
                  <span>{item.name}</span>
                )
              })
            }
          </div>
        </div>
        <div className='list-content-scene'></div>
        <div className='list-content-emotion'></div>
        <div className='list-content-theme'></div>
      </div>
    </SongCategoryWrapper>
  )
})

export default SongCategory;