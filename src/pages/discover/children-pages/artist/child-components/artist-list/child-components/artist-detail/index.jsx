import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

import { ArtistDetailWrapper } from './styled';

const ArtistDetailList = memo(() => {

  // const { currentType,artistList } = useSelector(state => ({
  //   currentType:state.getIn(['artist','currentType']),
  //   artistList:state.getIn(['artist','artistList'])
  // }),shallowEqual)

  const location = useLocation();
  
  console.log(location.state.id);

  return (
    <ArtistDetailWrapper>
     {location.state.id}
    </ArtistDetailWrapper>
  )

})

export default ArtistDetailList;