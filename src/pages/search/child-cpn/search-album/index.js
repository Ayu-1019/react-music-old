import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';

import { getSearchAlbumAction } from '../../store/actionCreators';

import ZXYAlbumCover from '@/components/album-cover';
import { AlbumsWrap } from './styled'

const ZXYSearchAblum = memo((props) => {

  const { searchAlbums, searchContent } = useSelector(state => ({
    searchAlbums: state.getIn(["search","searchAlbums"]),
    searchContent: state.getIn(["search","searchContent"])
  }),shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchAlbumAction(searchContent))
  },[dispatch,searchContent])
  return (
    <AlbumsWrap>
      {
        searchAlbums.slice(0,20).map(item => {
          return <ZXYAlbumCover key={item.id} info={item} fs="14px"/>
        })
      }
    </AlbumsWrap>
  )
})

export default ZXYSearchAblum;