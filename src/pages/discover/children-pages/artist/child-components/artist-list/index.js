import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';

import ZXYArtistHeader from '@/components/artist-header';
import ZXYAlphaList from './child-components/alpha-list'
import { ArtistListWrapper } from './styled';

const ArtistList = memo(() => {

  const { currentType,artistList } = useSelector(state => ({
    currentType:state.getIn(['artist','currentType']),
    artistList:state.getIn(['artist','artistList'])
  }),shallowEqual)
  console.log(artistList);

  return (
    <ArtistListWrapper>
      <ZXYArtistHeader title={currentType.name} />
      <ZXYAlphaList/>
      {
        
      }
    </ArtistListWrapper>
  )

})

export default ArtistList;