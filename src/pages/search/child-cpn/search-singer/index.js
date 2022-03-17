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
    searchSingers.map((value,index) => {  
      var reg =new RegExp(keyword,"g");
      value.name=value.name.replace(reg, `<span style="color: #0c73c2;">${keyword}</span>`); 
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
                <p dangerouslySetInnerHTML = {{__html:item.name}} ></p>
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