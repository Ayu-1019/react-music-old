import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { SongListWrapper } from './styled'

const SongList = memo(() => {

  const dispatch = useDispatch();
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(["songs", "categorySongs"])
  }),shallowEqual)
  console.log(categorySongs);

  return (
    <SongListWrapper>
      SongList
    </SongListWrapper>
  )
})

export default SongList;